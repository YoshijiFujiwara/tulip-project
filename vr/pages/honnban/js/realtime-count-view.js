    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: 'AIzaSyCAqwr0I48EO5gTzgKQ-_no4vC_YFBa2Gw',
      authDomain: 'tulip-2875b.firebaseapp.com',
      projectId: 'tulip-2875b',
      storageBucket: 'tulip-2875b.appspot.com',
      messagingSenderId: '321966855152',
      appId: '1:321966855152:web:78d1875ff72476e895c335',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function get_viewers_ip(json) {
      viewers_ip = json.ip;
      count_view(viewers_ip);
    }

    function count_view(viewers_ip) {
      var views;
      var ip_to_string = viewers_ip.toString();
      for (var i, i = 0; i < ip_to_string.length; i++) {
        ip_to_string = ip_to_string.replace('.', '-');
      }

      firebase
        .database()
        .ref()
        .child('page_views/' + ip_to_string)
        .set({
          viewers_ip: viewers_ip,
          timestamp: parseInt(new Date() / 1000),
        });

      firebase
        .database()
        .ref()
        .child('page_views')
        .on('value', function (snapshot) {
          views = snapshot.numChildren();
          document.getElementById('view_count_text').innerHTML = views;
        });

      //10分以上経ったIPアドレスを削除する
      var now = parseInt(new Date() / 1000);
      var cutoff = now - 10 * 60;
      var ref = firebase.database().ref('page_views');
      var old_ref = ref.orderByChild('timestamp').endAt(cutoff);
      old_ref.on('value', function (snapshot) {
        snapshot.forEach((childSnapshot) => {
          childSnapshot.ref.remove();
        });
      });
    }
    type="application/javascript"
    src="https://api.ipify.org/?format=jsonp&callback=get_viewers_ip"