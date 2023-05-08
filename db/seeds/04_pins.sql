INSERT INTO pins (user_id, map_id, title, latitude, longitude, description, image_url)
VALUES
  /* pins for restauraunts in Vancouver */
  (1, 1, 'Nats Pizza', 49.26410535761021, -123.16606072617436, 'A neighbourhood pizza spot.', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftryhiddengems.com%2Fposts%2Frestaurant%2Fnats-new-york-pizzeria%2F&psig=AOvVaw2v8q70ckSt849nQqbhnLdB&ust=1683652131788000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMiOtoyb5v4CFQAAAAAdAAAAABAE'),
  (1, 1, 'Chambar', 49.28006405055405, -123.1099136460492, 'Chic exposed-brick space serving Belgian cuisine.', 'https://www.google.com/maps/uv?pb=!1s0x5486717be8486bab%3A0xd14b5c9fbf94a205!3m1!7e115!4shttps%3A%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMDOZbUHKmukgL1cJ92Ioggd0aadRGkgyeww55r%3Dw260-h175-n-k-no!5srestaurants%20in%20vancouver%20-%20Google%20Search!15sCgIgAQ&imagekey=!1e10!2sAF1QipMDOZbUHKmukgL1cJ92Ioggd0aadRGkgyeww55r&hl=en&sa=X&ved=2ahUKEwjWz_TLm-b-AhXxAjQIHVCvA90Q7ZgBKAB6BAgGEAI#'),
  (1, 1, 'Per Se Social Corner', 49.27866423677703, -123.11850744001903, 'Innovative Italian cuisine & Spanish Tapas.', 'https://lh5.googleusercontent.com/p/AF1QipNSuti0M8PBhLvMq3FlPvSEsODB4K0KZFwAfRo=w426-h240-k-no'),

  /* pins for dog parks in Victoria*/
  (2, 2, 'Victoria West Dog Park', 48.4324397760703, -123.38169687369461, 'Dog park in Esquimalt.', 'https://www.google.com/maps/uv?pb=!1s0x548f73624176d8ff:0xcbe3ad992bf5cb63!3m1!7e115!4shttps://lh5.googleusercontent.com/p/AF1QipOz8z-V4wBwAhS_qIy_2A1R70-PRrmsPlSXTiCP%3Dw260-h175-n-k-no!5sdog+park+victoria+-+Google+Search!15zQ2dJZ0FRPT0&imagekey=!1e10!2sAF1QipOz8z-V4wBwAhS_qIy_2A1R70-PRrmsPlSXTiCP&hl=en&sa=X&ved=2ahUKEwiwi8Hvneb-AhXMATQIHeA0CewQ7ZgBKAB6BAgGEAI'),
  (2, 2, 'Pemberton Park', 48.41881632400892, -123.32821746407045, 'Dog park in Oak Bay.', 'https://www.google.co.uk/maps/place/Pemberton+Park/@48.419491,-123.3280503,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipMrN0DCt3jwFkG8QqVJ_FlfhMggN5A-YLjjU8q-!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipMrN0DCt3jwFkG8QqVJ_FlfhMggN5A-YLjjU8q-%3Dw114-h86-k-no!7i4608!8i3456!4m11!1m2!2m1!1sdog+park+victoria!3m7!1s0x548f74594f491c71:0x87acb09a2161eaa5!8m2!3d48.419044!4d-123.3278029!10e5!15sChFkb2cgcGFyayB2aWN0b3JpYVoTIhFkb2cgcGFyayB2aWN0b3JpYZIBBHBhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTmhjMHQyUjJGUkVBReABAA!16s%2Fg%2F11h0ks_y4#'),
  (2, 2, 'Clover Point Park', 48.40594061317699, -123.35192809793007, 'Dog park with ocean view.', 'https://lh5.googleusercontent.com/p/AF1QipNvzNutqg2GkiQrEWxvoq2EfMxLyDeKtm_QRdYz=w408-h306-k-no'),

  /* Museums in Vancouver */
  (1, 3, 'Naval Museum at HMCS Discovery', 49.29422212329567, -123.1219601547693, 'Canadian naval museum.', 'https://lh5.googleusercontent.com/p/AF1QipOyuGdyuqnJeOv9LF8F3j23vEdqPAMQkgRNyV-O=w408-h305-k-no'),
  (1, 3, 'Vancouver Maritime Museum', 49.276957040984925, -123.14743326846373, 'Museum charting the story of the Pacific and Arctic Waterways.', 'https://lh5.googleusercontent.com/p/AF1QipPSzaxmkNyPxRTlRZsk_wTjjKZUSRfV5xD1WGso=w408-h272-k-no'),
  (1, 3, 'Chinese Cultural Museum', 49.279367563920744, -123.10227906791901, 'Facility promotes Chinese culture via walking tours and classes.', 'https://lh5.googleusercontent.com/p/AF1QipPfHa4k3SZFXrEDKQbOAxmAthwn9h8rgemmyJAx=w408-h306-k-no'),

  /* Best pubs in Victoria */
  (2, 4, 'Darcys Pub', 48.4254786809253, -123.36961699080803, 'Great live music', 'https://lh5.googleusercontent.com/p/AF1QipMQyn63q1rsqWQP9CNsIMZRd7GB-gyH_n8A6Adf=w408-h306-k-no'),
  (2, 4, 'The Sticky Wicket', 48.423042190649326, -123.36529889956275, 'Multilevel, cricket-themed pub.', 'https://lh5.googleusercontent.com/p/AF1QipP6wccQ9ZBj7aA80WwsjfbUGuRvAZKxZQDLHjiS=w408-h272-k-no'),
  (2, 4, 'Maude Hunters Pub', 48.46231074149173, -123.33315208718624, 'Best wings in Victoria', 'https://lh5.googleusercontent.com/p/AF1QipNO8BY0KxQRqgKhazLlOG1gNKsMQBS4Rtnc4tp0=w408-h544-k-no'),

  /* Best Trails in Vancouver */
  (1, 5, 'Camosun Trail', 49.252380024125536, -123.1993393467353, 'Beautiful trail in the Endowment Lands.', 'https://lh5.googleusercontent.com/p/AF1QipPJ2gs83sblxPk52y0GNQOQJnqTUBeROVeAaEZ4=w408-h544-k-no'),
  (1, 5, 'Grouse Grind Trail', 49.369966192330914, -123.09853846151982, 'Steep trail to the top of Grouse Mountain.', 'https://lh5.googleusercontent.com/p/AF1QipP6PYdF7MsOh33z-8KlZXFe4I0LLa4mrfTljNLE=w408-h272-k-no'),
  (1, 5, 'Fraser River Trail', 49.200558394275134, -123.1338874909834, 'Walking trail along the Fraser River.', 'https://lh5.googleusercontent.com/p/AF1QipMJCI-QZoggx9KRSKgvTd9zOgB6dofC4prxHEcp=w426-h240-k-no'),

  /* pins for My Favourite Hotels in Cancun */
  (3, 6, 'Grand Xcaret', 21.13407601369495, -86.74485705858638, 'Ocean-view hotel.', 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=-Tucs3ifUJf-j6IVKn58kA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=227.42863&pitch=0&thumbfov=100'),
  (3, 6, 'Hotel Riu Palace', 21.104981047427703, -86.7628009129529, 'All-inclusive hotel great for families.', 'https://lh5.googleusercontent.com/p/AF1QipMSnMDbn3UnbpKqIgJa9hVbgh423UbI3WRwUaN9=w408-h272-k-no'),
  (3, 6, 'Grand Park Royal Cancun', 21.122531993140534, -86.75398285137277, 'Chic all-inclusive resort on the beach.', 'https://lh3.googleusercontent.com/gps-proxy/AE4_-5Hel1WedO4R60rXDIn-4HO20Qa5mtY0YGqDhw35Nm22k9dX7_G3CbLY3wYUkjk5grsAx7kfR0LJdtVpNA0-iSWX5DHr6W_WYLpgHHGxiYjEVC297l59lSvlIqvxz5XLrLWWpO5HQuny3t6L-3IfqnVrTqxv_d8RUOJCtpsWM_Bwz5fHittmhuyZPA=w408-h272-k-no')
