INSERT INTO pins (user_id, map_id, title, latitude, longitude, description, image_url)
VALUES
  /* pins for restauraunts in Vancouver */
  (1, 1, 'Nats Pizza', 49.26410535761021, -123.16606072617436, 'A neighbourhood pizza spot.', 'https://ssmscdn.yp.ca/image/resize/1085a80e-680e-4c68-8fdf-7a0f0330d4dc/ypui-d-mp-pic-gal-lg/nat-s-new-york-pizzaria-storefront-2.jpg'),
  (1, 1, 'Chambar', 49.28006405055405, -123.1099136460492, 'Chic exposed-brick space serving Belgian cuisine.', 'https://lh3.googleusercontent.com/p/AF1QipMDOZbUHKmukgL1cJ92Ioggd0aadRGkgyeww55r=s680-w680-h510'),
  (1, 1, 'Per Se Social Corner', 49.27866423677703, -123.11850744001903, 'Innovative Italian cuisine & Spanish Tapas.', 'https://lh5.googleusercontent.com/p/AF1QipNSuti0M8PBhLvMq3FlPvSEsODB4K0KZFwAfRo=w426-h240-k-no'),

  /* pins for dog parks in Victoria*/
  (2, 2, 'Victoria West Dog Park', 48.4324397760703, -123.38169687369461, 'Dog park in Esquimalt.', 'https://lh3.googleusercontent.com/p/AF1QipP8TMCxD1C2g2nRvtKasdvOI_QpMHFqer40g4YQ=s680-w680-h510'),
  (2, 2, 'Pemberton Park', 48.41881632400892, -123.32821746407045, 'Dog park in Oak Bay.', 'https://wcoastwilson.files.wordpress.com/2022/03/p3190031.jpeg'),
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
  (3, 6, 'Grand Xcaret', 21.13407601369495, -86.74485705858638, 'Ocean-view hotel.', 'https://www.hotelxcaret.com/assets/concentrador-hoteles/home/es/cada-visita-cuenta.webp'),
  (3, 6, 'Hotel Riu Palace', 21.104981047427703, -86.7628009129529, 'All-inclusive hotel great for families.', 'https://www.riu.com/en/binaris/hotel-riu-peninsula-newlogo_tcm55-258257.jpg?v=tm100222_1157'),
  (3, 6, 'Grand Park Royal Cancun', 21.122531993140534, -86.75398285137277, 'Chic all-inclusive resort on the beach.', 'https://cdn2.paraty.es/parkroyal-corpo/images/c5704ebf20368a7=s600')
