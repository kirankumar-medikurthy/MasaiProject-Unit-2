//testing-start//
if (localStorage.getItem('list1') == null) {
  const foodItems1 = [
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '2 Signature Veg Wraps at 289',
        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruvk4S2Snt1pnnZyVCoVaspjOnixXmjBl1_uOmE4tawnAlWVYdKGoqA60u-zoOUC-cNk&usqp=CAU',
        price: 250,
        rating: 4.5,
        boughtTimes: '296',
        description: 'Amazing wraps and savings! What else...',
        veg_nonVeg: 'veg',
      },
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '4 Classic Veg Wraps at 349',
        img_src:
          'https://i1.wp.com/cdn.whatsuplife.in/pune/listing/0_1541320686-96.jpg',
        price: 359,
        rating: 5,
        boughtTimes: '220',
        description:
          'Get spoiled with surprises and savings t...',
        veg_nonVeg: 'veg',
      },
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '4 Signature Veg Wraps at 529',
        img_src:
          'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
        price: 529,
        rating: 5,
        boughtTimes: '39',
        description:
          'All smiles for surprise. All hearts for savi..',
        veg_nonVeg: 'veg',
      },
  
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '4 Signature Veg Wraps at 529',
        img_src: 'https://pbs.twimg.com/media/DgSQkKRX4AAUsV9.jpg',
        price: 529,
        rating: 5,
        boughtTimes: '39 ',
        description: 'Savings upto Rs. 230 & many flavour-pac...',
        veg_nonVeg: 'veg',
      },
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '4 Signature NonVeg Wraps at..',
        img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BN-rapz-m6DfNYM-t9PYVDCHvbaF3opY9ldWqD9nxYl1RqbBfD8kuvMbQlGX6h4LSmo&usqp=CAU',
        price: 599,
        rating: 5,
        boughtTimes: '220',
        description:'Fantastic combos from Faasos hall of fame...',
        veg_nonVeg: 'Non-veg',
      },
      {
        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
        name: '4 Signature NonVeg Wraps at',
        img_src:'https://10619-2.s.cdn12.com/rests/original/804_503258630.jpg',
        price: 599,
        rating: 5,
        boughtTimes: '56',
        description:'Fantastic combos from Faasos hall of fam..',
        veg_nonVeg: 'veg',
      },
    ];
    localStorage.setItem('list1', JSON.stringify(foodItems1))
  }
  if (localStorage.getItem('list2') == null) {
      const foodItems2 = [
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '2 Signature Veg Wraps at 289',
            img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0wequQ1licbFXPz2IrNKrA90g2wgC6BPFdye6GVRmIq0XBd2ImiNk1_mjCoHFxES-to&usqp=CAU',
            price: 280,
            rating: 4.5,
            boughtTimes: '296',
            description: 'Amazing wraps and savings! What else...',
            veg_nonVeg: 'veg',
          },
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '4 Classic Veg Wraps at 349',
            img_src:
              'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/restaurant%2F670925%2Frestaurant020200418042409.jpg',
            price: 389,
            rating: 5,
            boughtTimes: '220',
            description:
              'Get spoiled with surprises and savings t...',
            veg_nonVeg: 'veg',
          },
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '4 Signature Veg Wraps at 529',
            img_src:
              'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
            price: 529,
            rating: 5,
            boughtTimes: '39',
            description:
              'All smiles for surprise. All hearts for savi..',
            veg_nonVeg: 'veg',
          },
      
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '4 Signature Veg Wraps at 529',
            img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlWlXsJzOTN5LXf7tw-HisNGjXJETy6nFCAay3c1ISdLWC-i-drNZIxkes82vsdg-xV8&usqp=CAU',
            price: 529,
            rating: 5,
            boughtTimes: '39 ',
            description: 'Savings upto Rs. 230 & many flavour-pac...',
            veg_nonVeg: 'veg',
          },
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '4 Signature NonVeg Wraps at..',
            img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BN-rapz-m6DfNYM-t9PYVDCHvbaF3opY9ldWqD9nxYl1RqbBfD8kuvMbQlGX6h4LSmo&usqp=CAU',
            price: 599,
            rating: 5,
            boughtTimes: '220',
            description:'Fantastic combos from Faasos hall of fame...',
            veg_nonVeg: 'Non-veg',
          },
          {
            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
            name: '4 Signature NonVeg Wraps at',
            img_src:'https://10619-2.s.cdn12.com/rests/original/804_503258630.jpg',
            price: 599,
            rating: 5,
            boughtTimes: '56',
            description:'Fantastic combos from Faasos hall of fam..',
            veg_nonVeg: 'veg',
          },
        ];
        localStorage.setItem('list2', JSON.stringify(foodItems2))
      }
      if (localStorage.getItem('list3') == null) {
          const foodItems3 = [
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '2 Signature Veg Wraps at 289',
                img_src: 'https://b.zmtcdn.com/data/pictures/chains/9/19204539/aa69e849cb33f18fecb937170a204f69.jpg',
                price: 280,
                rating: 4.5,
                boughtTimes: '296',
                description: 'Amazing wraps and savings! What else...',
                veg_nonVeg: 'veg',
              },
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '4 Classic Veg Wraps at 349',
                img_src:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W9pjQyJck9jKtSeW1JA7ZOAthW_gexE24uJ3c3_i7u7UTm3UeNgju6X9zkIh7Gmt-cI&usqp=CAU',
                price: 349,
                rating: 5,
                boughtTimes: '220',
                description:
                  'Get spoiled with surprises and savings t...',
                veg_nonVeg: 'veg',
              },
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '4 Signature Veg Wraps at 529',
                img_src:
                  'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/group%2F2518%2Fmenu020201026095919.jpg',
                price: 529,
                rating: 5,
                boughtTimes: '39',
                description:
                  'All smiles for surprise. All hearts for savi..',
                veg_nonVeg: 'veg',
              },
          
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '4 Signature Veg Wraps at 529',
                img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvoWhmgiiqgNEY2tFmCeUejgSL5hFk2YZGQ&usqp=CAU',
                price: 529,
                rating: 5,
                boughtTimes: '39 ',
                description: 'Savings upto Rs. 230 & many flavour-pac...',
                veg_nonVeg: 'veg',
              },
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '4 Signature NonVeg Wraps at..',
                img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_2UF8fbnoeDa2Rf-MDVK6IGsAkd83eG-zw&usqp=CAU',
                price: 599,
                rating: 5,
                boughtTimes: '220',
                description:'Fantastic combos from Faasos hall of fame...',
                veg_nonVeg: 'Non-veg',
              },
              {
                packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                name: '4 Signature NonVeg Wraps at',
                img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSawiT-b9M3ayR8btLVVDaqOo0HqW7o6DGws7Qo3yR9wE8J8nJZJxFkQ1sOPgGzdVBJ_U&usqp=CAU',
                price: 599,
                rating: 5,
                boughtTimes: '56',
                description:'Fantastic combos from Faasos hall of fam..',
                veg_nonVeg: 'veg',
              },
            ];
            localStorage.setItem('list3', JSON.stringify(foodItems3))
          }
          if (localStorage.getItem('list4') == null) {
              const foodItems4 = [
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '2 Signature Veg Wraps at 289',
                    img_src: 'https://twohealthykitchens.com/wp-content/uploads/2019/07/Easy-Cheesy-BBQ-Chicken-Wraps-Recipe.jpg',
                    price: 280,
                    rating: 4.5,
                    boughtTimes: '296',
                    description: 'Amazing wraps and savings! What else...',
                    veg_nonVeg: 'veg',
                  },
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '4 Classic Veg Wraps at 349',
                    img_src:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2HeKOuA77V7PWQC-abrck55ivqdGKLzep6UC6KBdI9ovGw3SZ9KcPupHEWgwobtNfRuk&usqp=CAU',
                    price: 349,
                    rating: 5,
                    boughtTimes: '220',
                    description:
                      'Get spoiled with surprises and savings t...',
                    veg_nonVeg: 'veg',
                  },
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '4 Signature Veg Wraps at 529',
                    img_src:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6_4A3WXD_sN1RJlC_F81qh3q1Ox9nN1V9lztI5p5DivlHCOeIj86gGX9pY9-1tFRVM4&usqp=CAU',
                    price: 529,
                    rating: 5,
                    boughtTimes: '39',
                    description:
                      'All smiles for surprise. All hearts for savi..',
                    veg_nonVeg: 'veg',
                  },
              
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '4 Signature Veg Wraps at 529',
                    img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlWlXsJzOTN5LXf7tw-HisNGjXJETy6nFCAay3c1ISdLWC-i-drNZIxkes82vsdg-xV8&usqp=CAU',
                    price: 529,
                    rating: 5,
                    boughtTimes: '39 ',
                    description: 'Savings upto Rs. 230 & many flavour-pac...',
                    veg_nonVeg: 'veg',
                  },
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '4 Signature NonVeg Wraps at..',
                    img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUoHsiFyGQF_Mkkc3ga8FoMEQzucnutTaUMNQY347N5tWrvcdp24FvwwyOXGDx7oljG0&usqp=CAU',
                    price: 599,
                    rating: 5,
                    boughtTimes: '220',
                    description:'Fantastic combos from Faasos hall of fame...',
                    veg_nonVeg: 'Non-veg',
                  },
                  {
                    packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                    name: '4 Signature NonVeg Wraps at',
                    img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSawiT-b9M3ayR8btLVVDaqOo0HqW7o6DGws7Qo3yR9wE8J8nJZJxFkQ1sOPgGzdVBJ_U&usqp=CAU',
                    price: 599,
                    rating: 5,
                    boughtTimes: '56',
                    description:'Fantastic combos from Faasos hall of fam..',
                    veg_nonVeg: 'veg',
                  },
                ];
                localStorage.setItem('list4', JSON.stringify(foodItems4))
              }

              if (localStorage.getItem('list5') == null) {
                const foodItems3 = [
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '2 Signature Veg Wraps at 289',
                      img_src: 'https://b.zmtcdn.com/data/pictures/chains/9/19204539/aa69e849cb33f18fecb937170a204f69.jpg',
                      price: 280,
                      rating: 4.5,
                      boughtTimes: '296',
                      description: 'Amazing wraps and savings! What else...',
                      veg_nonVeg: 'veg',
                    },
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '4 Classic Veg Wraps at 349',
                      img_src:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4W9pjQyJck9jKtSeW1JA7ZOAthW_gexE24uJ3c3_i7u7UTm3UeNgju6X9zkIh7Gmt-cI&usqp=CAU',
                      price: 349,
                      rating: 5,
                      boughtTimes: '220',
                      description:
                        'Get spoiled with surprises and savings t...',
                      veg_nonVeg: 'veg',
                    },
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '4 Signature Veg Wraps at 529',
                      img_src:
                        'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/group%2F2518%2Fmenu020201026095919.jpg',
                      price: 529,
                      rating: 5,
                      boughtTimes: '39',
                      description:
                        'All smiles for surprise. All hearts for savi..',
                      veg_nonVeg: 'veg',
                    },
                
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '4 Signature Veg Wraps at 529',
                      img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvoWhmgiiqgNEY2tFmCeUejgSL5hFk2YZGQ&usqp=CAU',
                      price: 529,
                      rating: 5,
                      boughtTimes: '39 ',
                      description: 'Savings upto Rs. 230 & many flavour-pac...',
                      veg_nonVeg: 'veg',
                    },
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '4 Signature NonVeg Wraps at..',
                      img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_2UF8fbnoeDa2Rf-MDVK6IGsAkd83eG-zw&usqp=CAU',
                      price: 599,
                      rating: 5,
                      boughtTimes: '220',
                      description:'Fantastic combos from Faasos hall of fame...',
                      veg_nonVeg: 'Non-veg',
                    },
                    {
                      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                      name: '4 Signature NonVeg Wraps at',
                      img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSawiT-b9M3ayR8btLVVDaqOo0HqW7o6DGws7Qo3yR9wE8J8nJZJxFkQ1sOPgGzdVBJ_U&usqp=CAU',
                      price: 599,
                      rating: 5,
                      boughtTimes: '56',
                      description:'Fantastic combos from Faasos hall of fam..',
                      veg_nonVeg: 'veg',
                    },
                  ];
                  localStorage.setItem('list5', JSON.stringify(foodItems3))
                }
         
                if (localStorage.getItem('list6') == null) {
                  const foodItems2 = [
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '2 Signature Veg Wraps at 289',
                        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0wequQ1licbFXPz2IrNKrA90g2wgC6BPFdye6GVRmIq0XBd2ImiNk1_mjCoHFxES-to&usqp=CAU',
                        price: 280,
                        rating: 4.5,
                        boughtTimes: '296',
                        description: 'Amazing wraps and savings! What else...',
                        veg_nonVeg: 'veg',
                      },
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '4 Classic Veg Wraps at 349',
                        img_src:
                          'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/restaurant%2F670925%2Frestaurant020200418042409.jpg',
                        price: 349,
                        rating: 5,
                        boughtTimes: '220',
                        description:
                          'Get spoiled with surprises and savings t...',
                        veg_nonVeg: 'veg',
                      },
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '4 Signature Veg Wraps at 529',
                        img_src:
                          'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
                        price: 529,
                        rating: 5,
                        boughtTimes: '39',
                        description:
                          'All smiles for surprise. All hearts for savi..',
                        veg_nonVeg: 'veg',
                      },
                  
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '4 Signature Veg Wraps at 529',
                        img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlWlXsJzOTN5LXf7tw-HisNGjXJETy6nFCAay3c1ISdLWC-i-drNZIxkes82vsdg-xV8&usqp=CAU',
                        price: 529,
                        rating: 5,
                        boughtTimes: '39 ',
                        description: 'Savings upto Rs. 230 & many flavour-pac...',
                        veg_nonVeg: 'veg',
                      },
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '4 Signature NonVeg Wraps at..',
                        img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BN-rapz-m6DfNYM-t9PYVDCHvbaF3opY9ldWqD9nxYl1RqbBfD8kuvMbQlGX6h4LSmo&usqp=CAU',
                        price: 599,
                        rating: 5,
                        boughtTimes: '220',
                        description:'Fantastic combos from Faasos hall of fame...',
                        veg_nonVeg: 'Non-veg',
                      },
                      {
                        packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                        name: '4 Signature NonVeg Wraps at',
                        img_src:'https://10619-2.s.cdn12.com/rests/original/804_503258630.jpg',
                        price: 599,
                        rating: 5,
                        boughtTimes: '56',
                        description:'Fantastic combos from Faasos hall of fam..',
                        veg_nonVeg: 'veg',
                      },
                    ];
                    localStorage.setItem('list6', JSON.stringify(foodItems2))
                  }
                 
                  if (localStorage.getItem('list7') == null) {
                    const foodItems1 = [
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '2 Signature Veg Wraps at 289',
                          img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruvk4S2Snt1pnnZyVCoVaspjOnixXmjBl1_uOmE4tawnAlWVYdKGoqA60u-zoOUC-cNk&usqp=CAU',
                          price: 280,
                          rating: 4.5,
                          boughtTimes: '296',
                          description: 'Amazing wraps and savings! What else...',
                          veg_nonVeg: 'veg',
                        },
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '4 Classic Veg Wraps at 349',
                          img_src:
                            'https://i1.wp.com/cdn.whatsuplife.in/pune/listing/0_1541320686-96.jpg',
                          price: 349,
                          rating: 5,
                          boughtTimes: '220',
                          description:
                            'Get spoiled with surprises and savings t...',
                          veg_nonVeg: 'veg',
                        },
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '4 Signature Veg Wraps at 529',
                          img_src:
                            'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
                          price: 529,
                          rating: 5,
                          boughtTimes: '39',
                          description:
                            'All smiles for surprise. All hearts for savi..',
                          veg_nonVeg: 'veg',
                        },
                    
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '4 Signature Veg Wraps at 529',
                          img_src: 'https://pbs.twimg.com/media/DgSQkKRX4AAUsV9.jpg',
                          price: 529,
                          rating: 5,
                          boughtTimes: '39 ',
                          description: 'Savings upto Rs. 230 & many flavour-pac...',
                          veg_nonVeg: 'veg',
                        },
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '4 Signature NonVeg Wraps at..',
                          img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BN-rapz-m6DfNYM-t9PYVDCHvbaF3opY9ldWqD9nxYl1RqbBfD8kuvMbQlGX6h4LSmo&usqp=CAU',
                          price: 599,
                          rating: 5,
                          boughtTimes: '220',
                          description:'Fantastic combos from Faasos hall of fame...',
                          veg_nonVeg: 'Non-veg',
                        },
                        {
                          packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                          name: '4 Signature NonVeg Wraps at',
                          img_src:'https://10619-2.s.cdn12.com/rests/original/804_503258630.jpg',
                          price: 599,
                          rating: 5,
                          boughtTimes: '56',
                          description:'Fantastic combos from Faasos hall of fam..',
                          veg_nonVeg: 'veg',
                        },
                      ];
                      localStorage.setItem('list7', JSON.stringify(foodItems1))
                    }
                  
                
                    if (localStorage.getItem('list8') == null) {
                      const foodItems2 = [
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '2 Signature Veg Wraps at 289',
                            img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF0wequQ1licbFXPz2IrNKrA90g2wgC6BPFdye6GVRmIq0XBd2ImiNk1_mjCoHFxES-to&usqp=CAU',
                            price: 280,
                            rating: 4.5,
                            boughtTimes: '296',
                            description: 'Amazing wraps and savings! What else...',
                            veg_nonVeg: 'veg',
                          },
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '4 Classic Veg Wraps at 349',
                            img_src:
                              'https://d4t7t8y8xqo0t.cloudfront.net/resized/720X280/restaurant%2F670925%2Frestaurant020200418042409.jpg',
                            price: 349,
                            rating: 5,
                            boughtTimes: '220',
                            description:
                              'Get spoiled with surprises and savings t...',
                            veg_nonVeg: 'veg',
                          },
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '4 Signature Veg Wraps at 529',
                            img_src:
                              'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
                            price: 529,
                            rating: 5,
                            boughtTimes: '39',
                            description:
                              'All smiles for surprise. All hearts for savi..',
                            veg_nonVeg: 'veg',
                          },
                      
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '4 Signature Veg Wraps at 529',
                            img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAlWlXsJzOTN5LXf7tw-HisNGjXJETy6nFCAay3c1ISdLWC-i-drNZIxkes82vsdg-xV8&usqp=CAU',
                            price: 529,
                            rating: 5,
                            boughtTimes: '39 ',
                            description: 'Savings upto Rs. 230 & many flavour-pac...',
                            veg_nonVeg: 'veg',
                          },
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '4 Signature NonVeg Wraps at..',
                            img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BN-rapz-m6DfNYM-t9PYVDCHvbaF3opY9ldWqD9nxYl1RqbBfD8kuvMbQlGX6h4LSmo&usqp=CAU',
                            price: 599,
                            rating: 5,
                            boughtTimes: '220',
                            description:'Fantastic combos from Faasos hall of fame...',
                            veg_nonVeg: 'Non-veg',
                          },
                          {
                            packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
                            name: '4 Signature NonVeg Wraps at',
                            img_src:'https://10619-2.s.cdn12.com/rests/original/804_503258630.jpg',
                            price: 599,
                            rating: 5,
                            boughtTimes: '56',
                            description:'Fantastic combos from Faasos hall of fam..',
                            veg_nonVeg: 'veg',
                          },
                        ];
                        localStorage.setItem('list8', JSON.stringify(foodItems2))
                      }
                     
//testing-end//
if (localStorage.getItem('Fassos-Foods') == null) {
  const foodItems = [
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '2 Signature Veg Wraps at 396',
      img_src: 'https://product-assets.faasos.io/production/product/image_1622813195694_image_es_1618555841315_2%20Signature%20Veg%20Wraps%20%40279.jpg',
      price: 396,
      rating: 5,
      boughtTimes: '296',
      description: 'Amazing wraps and savings! What else...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Classic Veg Wraps at 329',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813789447_image_es_1618555665605_4%20Classic%20Veg%20Wraps%20%40329.jpg',
      price: 329,
      rating: 5,
      boughtTimes: '220',
      description:
        'Get spoiled with surprises and savings t...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 549',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 549,
      rating: 5,
      boughtTimes: '39',
      description:
        'All smiles for surprise. All hearts for savi..',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '3 Signature Veg Wraps at 369',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813953613_image_es_1618555724773_3%20Signature%20Veg%20Wraps%20%40389.jpg',
      price: 369,
      rating: 5,
      boughtTimes: '56',
      description:
        'Lip-smacking flavours at jaw-dropping sav...',
      veg_nonVeg: 'veg',
    },

    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 729',
      img_src: 'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 729,
      rating: 5,
      boughtTimes: '39 ',
      description: 'Savings upto Rs. 230 & many flavour-pac...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at..',
      img_src:'https://product-assets.faasos.io/production/product/image_1622813915507_image_es_1618555480375_4%20Signature%20NonVeg%20Wraps%20%40589.jpg',
      price: 199,
      rating: 5,
      boughtTimes: '220',
      description:'Fantastic combos from Faasos hall of fame...',
      veg_nonVeg: 'Non-veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 239',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 239,
      rating: 5,
      boughtTimes: '39',
      description:'Savings upto Rs. 230 & many flavour-packe..',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at',
      img_src:'https://product-assets.faasos.io/production/product/image_1622813953613_image_es_1618555724773_3%20Signature%20Veg%20Wraps%20%40389.jpg',
      price: 590,
      rating: 5,
      boughtTimes: '56',
      description:'Fantastic combos from Faasos hall of fam..',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 329',
      img_src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCvoWhmgiiqgNEY2tFmCeUejgSL5hFk2YZGQ&usqp=CAU',
      price: 329,
      rating: 5,
      boughtTimes: '39 ',
      description: 'Savings upto Rs. 230 & many flavour-pac...',
      veg_nonVeg: 'Non-veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at..',
      img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_2UF8fbnoeDa2Rf-MDVK6IGsAkd83eG-zw&usqp=CAU',
      price: 599,
      rating: 5,
      boughtTimes: '220',
      description:'Fantastic combos from Faasos hall of fame...',
      veg_nonVeg: 'Non-veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at',
      img_src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSawiT-b9M3ayR8btLVVDaqOo0HqW7o6DGws7Qo3yR9wE8J8nJZJxFkQ1sOPgGzdVBJ_U&usqp=CAU',
      price: 599,
      rating: 5,
      boughtTimes: '56',
      description:'Fantastic combos from Faasos hall of fam..',
      veg_nonVeg: 'Non-veg',
    },
  ];
  localStorage.setItem('Fassos-Foods', JSON.stringify(foodItems))
}
//----------------------------------->abhi---start<------------------------------//
function handleNonVeg(){
  // console.log('annycool')
 var cartData1 = JSON.parse(localStorage.getItem('Fassos-Foods'))
  let nonVeg_arr = [],veg_arr =[];
  for(key in cartData1 ){
    if(cartData1[key].veg_nonVeg=="veg") {
       veg_arr.push(cartData1[key])
    }
    else if(cartData1[key].veg_nonVeg=="Non-veg"){
     nonVeg_arr.push(cartData1[key])
    }
   }

   let dataDiv = document.getElementById("productArea");
   dataDiv.innerHTML = null;
  

    nonVeg_arr.forEach(function (product) {
    let div = document.createElement("div")
    div.id = "prod"

    let packdetails = document.createElement('p');
    packdetails.innerText = product.packdetails;
    packdetails.id = "packdetails"

    let pname = document.createElement('p');
    pname.innerText = product.name;
    pname.id = "prodname"

    let cl = document.createElement('div');
    cl.id = 'clear'

    let prating = document.createElement('p');
    prating.innerText = product.rating;
    prating.id = "prodRate"

    let pprice = document.createElement('p');
    pprice.innerText = "₹ " + product.price;
    pprice.id = "prodPrice"

    let btime = document.createElement('p');
    btime.innerText = product.boughtTimes + ' bought this';
    btime.id = "boughtTimes"

    let pdesc = document.createElement('p');
    pdesc.innerText = product.description;
    pdesc.id = "proddescription"

    let readMore = document.createElement('p');
    readMore.innerText = "Read More";
    readMore.id = "readMore"

    let Customisable = document.createElement('p');
    Customisable.innerText = "Customisable";
    Customisable.id = "Customisable"

    Customisable
    let star = document.createElement('img');
    star.src = "./images/star.png"
    star.id = "star"

    let btn = document.createElement("button");
    btn.innerText = "Add";
    btn.id = "button"

    btn.onclick = function () {
      addtoCart(product);
    };
    let pveg_nonVeg = document.createElement('ps');
    pveg_nonVeg.innerText = product.veg_nonVeg;
    pveg_nonVeg.id = "pveg_nonVeg"

    let image = document.createElement('img');
    image.src = product.img_src;
    image.id = "prodImage"
    div.append(image, pname, pveg_nonVeg, cl, pprice, cl, pdesc,cl, readMore, star,btn,cl,btime,  Customisable);
    dataDiv.append(div)

  });
}
function handleVeg(){
  // console.log('annycool')
 var cartData1 = JSON.parse(localStorage.getItem('Fassos-Foods'))
  let nonVeg_arr = [],veg_arr =[];
  for(key in cartData1 ){
    if(cartData1[key].veg_nonVeg=="veg") {
       veg_arr.push(cartData1[key])
    }
    else if(cartData1[key].veg_nonVeg=="Non-veg"){
     nonVeg_arr.push(cartData1[key])
    }
   }

   let dataDiv = document.getElementById("productArea");
   dataDiv.innerHTML = null;
  

   veg_arr.forEach(function (product) {
    let div = document.createElement("div")
    div.id = "prod"

    let packdetails = document.createElement('p');
    packdetails.innerText = product.packdetails;
    packdetails.id = "packdetails"

    let pname = document.createElement('p');
    pname.innerText = product.name;
    pname.id = "prodname"

    let cl = document.createElement('div');
    cl.id = 'clear'

    let prating = document.createElement('p');
    prating.innerText = product.rating;
    prating.id = "prodRate"

    let pprice = document.createElement('p');
    pprice.innerText = "₹ " + product.price;
    pprice.id = "prodPrice"

    let btime = document.createElement('p');
    btime.innerText = product.boughtTimes + ' bought this';
    btime.id = "boughtTimes"

    let pdesc = document.createElement('p');
    pdesc.innerText = product.description;
    pdesc.id = "proddescription"

    let readMore = document.createElement('p');
    readMore.innerText = "Read More";
    readMore.id = "readMore"

    let Customisable = document.createElement('p');
    Customisable.innerText = "Customisable";
    Customisable.id = "Customisable"

    Customisable
    let star = document.createElement('img');
    star.src = "./images/star.png"
    star.id = "star"

    let btn = document.createElement("button");
    btn.innerText = "Add";
    btn.id = "button"

    btn.onclick = function () {
      addtoCart(product);
    };
    let pveg_nonVeg = document.createElement('ps');
    pveg_nonVeg.innerText = product.veg_nonVeg;
    pveg_nonVeg.id = "pveg_nonVeg"

    let image = document.createElement('img');
    image.src = product.img_src;
    image.id = "prodImage"
    div.append(image, pname, pveg_nonVeg, cl, pprice, cl, pdesc,cl, readMore, star,btn,cl,btime,  Customisable);
    dataDiv.append(div)

  });
}
//----------------------------->abhi---end<-----------------------------------------//
function showProduct(fooddetail) {

  let cartData = fooddetail
  let dataDiv = document.getElementById("productArea");
  dataDiv.innerHTML = null;
  

    cartData.forEach(function (product) {
    let div = document.createElement("div")
    div.id = "prod"

    let packdetails = document.createElement('p');
    packdetails.innerText = product.packdetails;
    packdetails.id = "packdetails"

    let pname = document.createElement('p');
    pname.innerText = product.name;
    pname.id = "prodname"

    let cl = document.createElement('div');
    cl.id = 'clear'

    let prating = document.createElement('p');
    prating.innerText = product.rating;
    prating.id = "prodRate"

    let pprice = document.createElement('p');
    pprice.innerText = "₹ " + product.price;
    pprice.id = "prodPrice"

    let btime = document.createElement('p');
    btime.innerText = product.boughtTimes + ' bought this';
    btime.id = "boughtTimes"

    let pdesc = document.createElement('p');
    pdesc.innerText = product.description;
    pdesc.id = "proddescription"

    let readMore = document.createElement('p');
    readMore.innerText = "Read More";
    readMore.id = "readMore"

    let Customisable = document.createElement('p');
    Customisable.innerText = "Customisable";
    Customisable.id = "Customisable"

    Customisable
    let star = document.createElement('img');
    star.src = "./images/star.png"
    star.id = "star"

    let btn = document.createElement("button");
    btn.innerText = "Add";
    btn.id = "button"

    btn.onclick = function () {
      addtoCart(product);
    };
    let pveg_nonVeg = document.createElement('ps');
    pveg_nonVeg.innerText = product.veg_nonVeg;
    pveg_nonVeg.id = "pveg_nonVeg"

    let image = document.createElement('img');
    image.src = product.img_src;
    image.id = "prodImage"
    div.append(image, pname, pveg_nonVeg, cl, pprice, cl, pdesc,cl, readMore, star,btn,cl,btime,  Customisable);
    dataDiv.append(div)

  });
}
showProduct(JSON.parse(localStorage.getItem('Fassos-Foods')));