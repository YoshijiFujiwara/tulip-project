/* global NAF */
var ChildEntityCache = require('./ChildEntityCache');

var visibleFalseTimer = (function () {
  var timers = []; // variable persisted here

  return function (element, timerId, timerMillSec = 3000) {
    window.clearTimeout(timers[timerId]);
    timers[timerId] = window.setTimeout(function () {
      element.setAttribute('visible', false);
    }, timerMillSec);
  };
})();

class NetworkEntities {
  constructor() {
    this.entities = {};
    this.childCache = new ChildEntityCache();
    this.onRemoteEntityCreatedEvent = new Event('remoteEntityCreated');
    this._persistentFirstSyncs = {};
  }

  registerEntity(networkId, entity) {
    this.entities[networkId] = entity;
  }

  createRemoteEntity(entityData) {
    NAF.log.write('Creating remote entity', entityData);

    var networkId = entityData.networkId;
    var el = NAF.schemas.getCachedTemplate(entityData.template);
    // console.log('create remote entityData', entityData);
    // console.log('create remote el', el);
    // console.log('create remote el child nodes', el.childNodes);
    var name = el.querySelector('#name');
    name.setAttribute(
      'text',
      `value: ${entityData.username}; align: center; negate:false; font: /honnban/assets/fonts/noto-sans-cjk-jp/noto-sans-cjk-jp-msdf.json; font-image: /honnban/assets/fonts/noto-sans-cjk-jp/noto-sans-cjk-jp-msdf.png`,
    );

    // アバターの切り替え
    var avatarModel = el.querySelector('#avatar_model');
    avatarModel.setAttribute(
      'src',
      `/honnban/assets/model/${entityData.avatar}/scene.gltf`,
    );
    switch (entityData.avatar) {
      case 'super_carrot':
        avatarModel.setAttribute('scale', '0.01 0.01 0.01');
        avatarModel.setAttribute('rotation', '0 165 -15');
        avatarModel.setAttribute('position', '0 -1.426 0');
        break;
      case 'cute_penguin':
        avatarModel.setAttribute('scale', '0.003 0.003 0.003');
        avatarModel.setAttribute('position', '0 -1.57 0.05791');
        break;
      case 'baby_carrot':
        avatarModel.setAttribute('scale', '0.3 0.3 0.3');
        avatarModel.setAttribute('rotation', '0 90 0');
        break;
      case 'dragon':
        avatarModel.setAttribute('scale', '0.02 0.02 0.02');
        break;
      case 'scarlet_macaw':
        avatarModel.setAttribute('scale', '0.0018 0.002 0.002');
        avatarModel.setAttribute('position', '0 -0.7 0.05791');
        break;
      case 'none':
        avatarModel.remove();
        name.remove();
        break;
      default:
    }

    // チャットONの場合のみ、サウンドアイコンを表示する
    if (entityData.chatOn) {
      const avatarChatOnEl = el.querySelector('#avatar_chat_on');
      avatarChatOnEl.setAttribute('visible', 'true');
    }

    // ここから下はいじらない事
    el.setAttribute('id', 'naf-' + networkId);

    this.initPosition(el, entityData.components);
    this.initRotation(el, entityData.components);
    this.addNetworkComponent(el, entityData);

    this.registerEntity(networkId, el);

    return el;
  }

  initPosition(entity, componentData) {
    var hasPosition = componentData['position'];
    if (hasPosition) {
      var position = componentData.position;
      entity.setAttribute('position', position);
    }
  }

  initRotation(entity, componentData) {
    var hasRotation = componentData['rotation'];
    if (hasRotation) {
      var rotation = componentData.rotation;
      entity.setAttribute('rotation', rotation);
    }
  }

  addNetworkComponent(entity, entityData) {
    console.log('addNetworkComponent entityData', entityData);
    var networkData = {
      template: entityData.template,
      creator: entityData.creator,
      owner: entityData.owner,
      networkId: entityData.networkId,
      persistent: entityData.persistent,
    };

    entity.setAttribute('networked', networkData);
    entity.firstUpdateData = entityData;
  }

  updateEntityMulti(client, dataType, entityDatas, source) {
    if (NAF.options.syncSource && source !== NAF.options.syncSource) return;
    for (let i = 0, l = entityDatas.d.length; i < l; i++) {
      this.updateEntity(client, 'u', entityDatas.d[i], source);
    }
  }

  updateEntity(client, dataType, entityData, source) {
    if (NAF.options.syncSource && source !== NAF.options.syncSource) return;
    var networkId = entityData.networkId;

    if (this.hasEntity(networkId)) {
      this.entities[networkId].components.networked.networkUpdate(entityData);
    } else if (entityData.isFirstSync) {
      if (
        NAF.options.firstSyncSource &&
        source !== NAF.options.firstSyncSource
      ) {
        NAF.log.write('Ignoring first sync from disallowed source', source);
      } else {
        if (entityData.persistent) {
          // If we receive a firstSync for a persistent entity that we don't have yet,
          // we assume the scene will create it at some point, so stash the update for later use.
          this._persistentFirstSyncs[networkId] = entityData;
        } else {
          this.receiveFirstUpdateFromEntity(entityData);
        }
      }
    }
  }

  receiveFirstUpdateFromEntity(entityData) {
    console.log('receiveFirstUpdateFromEntity entityData', entityData);

    var parent = entityData.parent;
    var networkId = entityData.networkId;

    var parentNotCreatedYet = parent && !this.hasEntity(parent);
    if (parentNotCreatedYet) {
      this.childCache.addChild(parent, entityData);
    } else {
      var remoteEntity = this.createRemoteEntity(entityData);
      this.createAndAppendChildren(networkId, remoteEntity);
      this.addEntityToPage(remoteEntity, parent);
    }
  }

  createAndAppendChildren(parentId, parentEntity) {
    var children = this.childCache.getChildren(parentId);
    for (var i = 0; i < children.length; i++) {
      var childEntityData = children[i];
      var childId = childEntityData.networkId;
      if (this.hasEntity(childId)) {
        NAF.log.warn(
          'Tried to instantiate entity multiple times',
          childId,
          childEntityData,
          'Existing entity:',
          this.getEntity(childId),
        );
        continue;
      }
      var childEntity = this.createRemoteEntity(childEntityData);
      this.createAndAppendChildren(childId, childEntity);
      parentEntity.appendChild(childEntity);
    }
  }

  addEntityToPage(entity, parentId) {
    if (this.hasEntity(parentId)) {
      this.addEntityToParent(entity, parentId);
    } else {
      this.addEntityToSceneRoot(entity);
    }
  }

  addEntityToParent(entity, parentId) {
    var parentEl = document.getElementById('naf-' + parentId);
    parentEl.appendChild(entity);
  }

  addEntityToSceneRoot(el) {
    var scene = document.querySelector('a-scene');
    scene.appendChild(el);
  }

  completeSync(targetClientId, isFirstSync) {
    for (var id in this.entities) {
      if (this.entities[id]) {
        this.entities[id].components.networked.syncAll(
          targetClientId,
          isFirstSync,
        );
      }
    }
  }

  removeRemoteEntity(toClient, dataType, data, source) {
    if (NAF.options.syncSource && source !== NAF.options.syncSource) return;
    var id = data.networkId;
    return this.removeEntity(id);
  }

  reactRemoteEntity(toClient, dataType, data, source) {
    NAF.log.write('reactRemoteEntity toClient', toClient);
    NAF.log.write('reactRemoteEntity dataType', dataType);
    NAF.log.write('reactRemoteEntity data', data);
    NAF.log.write('reactRemoteEntity source', source);

    const { networkId, reactionType } = data;
    const reactionPlayerEl = document.getElementById(`naf-${networkId}`);
    const reactionEl = reactionPlayerEl.querySelector('#avatar_reaction');
    reactionEl.setAttribute(
      'src',
      `/honnban/assets/img/emo_${reactionType}.png`,
    );
    reactionEl.setAttribute('visible', true);

    reactionEl.setAttribute(
      'sound',
      `src: #assets-${reactionType}-effect; volume:0.07`,
    );
    reactionEl.components.sound.playSound();
    visibleFalseTimer(reactionEl, networkId);
  }

  iineRemoteEntity(toClient, dataType, data, source) {
    NAF.log.write('iineRemoteEntity toClient', toClient);
    NAF.log.write('iineRemoteEntity dataType', dataType);
    NAF.log.write('iineRemoteEntity data', data);
    NAF.log.write('iineRemoteEntity source', source);

    //　iineに＋１する
    const { networkId } = data;
    const likeNumEl = document.getElementById('number-of-like');
    NAF.log.write('likeNumEl:', likeNumEl);
    const num = parseInt(likeNumEl.getAttribute('value'));
    const sum = num + 1;
    NAF.log.write('count-up::' + sum);
    likeNumEl.setAttribute('value', sum);
  }

  removeEntitiesOfClient(clientId) {
    var entityList = [];
    for (var id in this.entities) {
      var entityCreator = NAF.utils.getCreator(this.entities[id]);
      if (entityCreator === clientId) {
        let persists;
        const component = this.entities[id].getAttribute('networked');
        if (component && component.persistent) {
          persists = NAF.utils.takeOwnership(this.entities[id]);
        }
        if (!persists) {
          var entity = this.removeEntity(id);
          entityList.push(entity);
        }
      }
    }
    return entityList;
  }

  removeEntity(id) {
    this.forgetPersistentFirstSync(id);

    if (this.hasEntity(id)) {
      var entity = this.entities[id];
      this.forgetEntity(id);
      entity.parentNode.removeChild(entity);
      return entity;
    } else {
      NAF.log.error("Tried to remove entity I don't have.");
      return null;
    }
  }

  forgetEntity(id) {
    delete this.entities[id];
    this.forgetPersistentFirstSync(id);
  }

  getPersistentFirstSync(id) {
    return this._persistentFirstSyncs[id];
  }

  forgetPersistentFirstSync(id) {
    delete this._persistentFirstSyncs[id];
  }

  getEntity(id) {
    if (this.entities[id]) {
      return this.entities[id];
    }
    return null;
  }

  hasEntity(id) {
    return !!this.entities[id];
  }

  removeRemoteEntities() {
    this.childCache = new ChildEntityCache();

    for (var id in this.entities) {
      var owner = this.entities[id].getAttribute('networked').owner;
      if (owner != NAF.clientId) {
        this.removeEntity(id);
      }
    }
  }
}

module.exports = NetworkEntities;
