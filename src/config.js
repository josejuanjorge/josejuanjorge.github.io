var config = {
    style: 'mapbox://styles/jjjc/cllc48uuj00s001pi5tfoaah1',
    accessToken: 'pk.eyJ1IjoiampqYyIsImEiOiJjbGlpeTZkYjgwMnZoM2pwbDJrdGhmeWhnIn0.pSKvo7jTLU4cjcfQPDIPhQ',
    showMarkers: false,
    // markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // titleImage: './images/hcr_logo.png',
    subtitleWithVideo: '<div>\n' +
        '    <div class="content">\n' +
        '        <div class="text">\n' +
        '            <h2><p>HCR develops, preserves and protects affordable housing and invests in New York’s economically vibrant communities. We work with many private, public and nonprofit partners to create safe, healthy and affordable housing opportunities for all New Yorkers.</p><p>This new website presents HCR’s portfolio of developments and highlights opportunities for developers, primes, and subcontractors to explore future opportunities and report utilization on existing projects.</p></h2>\n' +
        '        </div>\n' +
        '        <div class="video">\n' +
        '           <p><iframe width="500" height="315" src="https://www.youtube.com/embed/WwrSqxyuAkM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>'+
    ' <div  style="width:auto;height:420px; background-color:#8a7a9a; text-align: center;" ;><img src="./images/banner.png" alt="HCR Logo" style="max-width: 100%; max-height: 100%;";></div>',
    footer: 'If you are interested in becoming a prime or sub contractor, please view HCR’s future opportunities.',
    chapters: [
        {
            id: 'start',
            alignment: 'left',
            hidden: true,
            title: '',
            // image: './images/RCG-Stadium.png',
            description: '',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 5.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nys-boundary-boundary',
                    opacity: 1.0,
                    duration: 0
                },
                                {
                    layer: 'buildings-hcr',
                    opacity: 1.0,
                    duration: 0
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'total_portfolio',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<p class="description-text">In the past 10 years HCR has built or renovated 2,946 buildings across New York.</p>',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 5.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

            ],
            onChapterExit: [
                {
                    layer: 'nys-boundary-boundary',
                    opacity: 0.0,
                    duration: 500
                },
                                {
                    layer: 'buildings-hcr',
                    opacity: 0.0,
                    duration: 500
                }     ,           {
                    layer: 'nys-boundary-boundary',
                    opacity: 1.0,
                    duration: 500
                },
                                {
                    layer: 'buildings-hcr',
                    opacity: 1.0,
                    duration: 500
                },
            ]
        },
        {
            id: 'total_portfolio_full_view',
            alignment: 'left',
            hidden: true,
            title: '',
            description: '',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 5.78,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'nys-boundary-boundary',
                    opacity: 1.0,
                    duration: 0
                },
                                {
                    layer: 'buildings-hcr',
                    opacity: 1.0,
                    duration: 0
                },
                {
                    layer: 'buildings-hcr-dot-density',
                    opacity: 0.0,
                    duration: 500
                },
                {
                    layer: 'nys-boundary',
                    opacity: 0.0,
                    duration: 500
                },
            ],
            onChapterExit: [
                 {
                    layer: 'nys-boundary-boundary',
                    opacity: 0.0,
                    duration: 500
                },
                                {
                    layer: 'buildings-hcr',
                    opacity: 0.0,
                    duration: 500
                },
                {
                    layer: 'buildings-hcr-dot-density',
                    opacity: 0.65,
                    duration: 500
                },
                {
                    layer: 'nys-boundary',
                    opacity: 0.30,
                    duration: 500
                },
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '<p class="description-text">HCR directly invested more than $3.8 billion to help provide 184,192 homes to families.</p>' +
                '<dl id="leyend">' +
                '<dt style="background-color:blue; text-color:blue">___</dt><dd>60 > residents per building</dd><br>' +
                '<dt style="background-color:greenyellow; text-color:greenyellow">___</dt><dd>60 < residents per building < 150 </dd><br>' +
                '<dt style="background-color:red; text-color:red"  >___</dt><dd>150 > residents per building</dd></dl>',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 6,
                pitch: 30,
                bearing: 0,
                speed: 1, // make the flying slow
                // curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'mapbox-satellite',
                    opacity: 0.0,
                    duration: 500
                },
                {
                    layer: 'buildings-hcr-dot-density',
                    opacity: 0.65,
                    duration: 500
                },
                {
                    layer: 'nys-boundary',
                    opacity: 0.30,
                    duration: 500
                },
                ],
            onChapterExit: [  {
                    layer: 'buildings-hcr-dot-density',
                    opacity: 0.0,
                    duration: 500
                },
                {
                    layer: 'nys-boundary',
                    opacity: 0.0,
                    duration: 500
                },]
        },
        {
            id: 'zoom_in',
            alignment: 'left',
            hidden: false,
            title: '',
            description: '<p class="description-text">This ranges from the recently completed 160 apartments at Brookdale Complex in Brooklyn.</p><br><iframe width="440" height="315" src="https://www.youtube.com/embed/kr5PKi2XtkY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [-73.755152, 40.593251],
                zoom: 17,
                pitch: 30.01,
                bearing: 20.00,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                    layer: 'mapbox-satellite',
                    opacity: 1.0,
                    duration: 1000
                },],
            onChapterExit: [{
                    layer: 'buildings-hcr-dot-density',
                    opacity: 0.0,
                    duration: 1000
                },
            ]
        },
        {
            id: 'zoom-in-two',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/86290_1660659731.png',
            description: '<p class="description-text">To the 100 units at Bradmar Village Apartments at the edge of Western New York.</p>',
            location: {
                center: [-79.220605,42.076954],
                zoom: 17,
                pitch: 30.01,
                bearing: 20.00,
                speed: 3, // make the flying fast
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                    layer: 'new-projects',
                    opacity: 0.0,
                    duration: 0
                },   {
                    layer: 'axi-organization-data',
                    opacity: 0.0,
                    duration: 500,
                },{
                    layer: 'nys-boundary-boundary',
                    opacity: 0.0,
                    duration: 0
                },      ],
            onChapterExit: [                                {
                    layer: '3D-extrusions',
                    opacity: 0.7,
                    duration: 1000,
                },
                {
                    layer: '3D-extrusions-labels',
                    opacity: 0.7,
                    duration: 1000,
                },{
                    layer: 'mapbox-satellite',
                    opacity: 0.0,
                    duration: 500
                },]
        },
        {
            id: 'just-data',
            alignment: 'right',
            hidden: false,
            title: '',
            description: '<p class="description-text">HCR encourages Minority and Women-Owned Business Enterprises (MWBEs) and Service-Disabled Veteran-Owned Business Enterprises (SDVOBs) to participate on HCR-funded projects.<br><br> HCR encourages Minority and Women-Owned Business Enterprises (MWBEs) and Service-Disabled Veteran-Owned Business Enterprises (SDVOBs) to participate on HCR-funded projects.' +
                'Over the past 6 years, more than 5,000 certified MWBEs and SDVOBs have worked on HCR projects.</p>'+
            '<dl style=" width: 120px;\n' +
                '         background: #fff;\n' +
                '         border: 1px solid #000;\n' +
                '         padding: 5px 15px; align-content: flex-start;">' +
                '<dt style="background-color:#202bf8; text-color:#202bf8">___</dt><dd>WBE</dd><br>' +
                '<dt style="background-color:#b429f5; text-color:#b429f5">___</dt><dd>MBE</dd><br>' +
                '</dl>',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 5.78,
                pitch: 0,
                bearing: 0,
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ {
                    layer: 'mapbox-satellite',
                    opacity: 0.0,
                    duration: 0
                },{
                    layer: 'axi-organization-data',
                    opacity: 0.6,
                    duration: 500,
                },{
                    layer: 'nys-boundary-boundary',
                    opacity: 1.0,
                    duration: 0
                },  ],
            onChapterExit: [  {
                    layer: 'axi-organization-data',
                    opacity: 0.0,
                    duration: 500,
                },{
                    layer: 'nys-boundary-boundary',
                    opacity: 0.0,
                    duration: 0
                },  ]
        },
        {
            id: 'extrusion-map',
            alignment: 'left',
            hidden: false,
            title: '',
            description:'',
            textWithAttachments: '<div style="display: flex; \n' +
                '            flex-direction: column;\n' +
                '            align-items: center;\n' +
                '            justify-content: center;padding:0;\n' +
                '            width: 100%; /* Adjust this value to control vertical centering */\n' +
                '            text-align: center;"><p class="description-text" style="margin: 0; padding:0; text-justify: auto;\n' +
                '    text-align: left;">Over the past 6 years, HCR’s efforts have resulted in more than $1.1 billion in MWBE utilization across New York state. HCR consistently generates some of the highest utilization of New York’s Agencies and Authorities.</p><div id="chart_div""></div>' +
                 '<dl style=" width: 250px;\n' +
                '         background: #fff;\n' +
                '         border: 1px solid #000;\n' +
                '         padding: 5px 15px; text-align:left";>' +
                '<dt style="background-color:#e784f0; color:#e784f0; text-align:left ">___</dt><dd>< $ 399k</dd><br>' +
                '<dt style="background-color:#b429f5; color:#b429f5; text-align: left">___</dt><dd>>$ 800k - $ 2.99MM</dd><br>' +
                '<dt style="background-color:#a46af1; color:#a46af1; text-align: left">___</dt><dd>>$ 3MM - $ 4.99MM</dd><br>' +
                '<dt style="background-color:#895ff1; color:#895ff1; text-align: left">___</dt><dd>>$ 5MM - $ 15.99MM</dd><br>' +
                '<dt style="background-color:#6a55f1; color:#6a55f1; text-align: left">___</dt><dd>>$ 16MM - $ 29.99MM</dd><br>' +
                '<dt style="background-color:#4150f1; color:#4150f1; text-align: left">___</dt><dd>> $ 60 MM</dd><br>' +
                '</dl>'+
                '</div>'
               ,
            location: {
                center: [-73.948114, 40.831623],
                zoom: 9.01,
                pitch: 45.04,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                speed: 2, // make the flying slow
                curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [  {
                    layer: 'new-projects',
                    opacity: 0.0,
                    duration: 0
                },   ],
            onChapterExit: [ {
                    layer: '3D-extrusions',
                    opacity: 0.0,
                    duration: 1000,
                },
                {
                    layer: '3D-extrusions-labels',
                    opacity: 0.0,
                    duration: 1000,
                },]
        },
        {
            id: 'active-projects',
            alignment: 'fully',
            hidden: false,
            title: '',
            description: '<p class="description-text">HCR currently has 300 active developments with hundreds of new projects coming.</p>',
            location: {
                center: [-74.68321, 42.62950],
                zoom: 6.5,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                    layer: 'new-projects',
                    opacity: 1.0,
                    duration: 0
                },  {
                  layer: 'nys-boundary',
                    opacity: 0.25,
                    duration: 0

            } ,{
                  layer: 'nys-boundary-boundary',
                    opacity: 0.0,
                    duration: 0

            }  ],
            onChapterExit: [    ]
        },{
            id: 'active-projects-full',
            alignment: 'fully',
            hidden: true,
            title: '',
            description: '<p class="description-text">HCR currently has 300 active developments with hundreds of new projects coming.</p>',
            location: {
                center: [-75.28321, 42.25950],
                zoom: 6.3,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [   {
                    layer: 'new-projects',
                    opacity: 0.0,
                    duration: 0
                },{
                  layer: 'nys-boundary',
                    opacity: 0.0,
                    duration: 1000

            } ,{
                  layer: 'nys-boundary-boundary',
                    opacity: 1.0,
                    duration: 1000

            }   ],
            onChapterExit: [   ]
        }
    ]
};