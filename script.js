TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "partial": false,
  "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_85F6A209_90FA_23E0_41E1_684231201E01",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17, this.camera_80969BB8_9BFD_0737_4180_B975D529DB16); this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "hfov": 4.86,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -171.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.6
       }
      ],
      "items": [
       {
        "hfov": 4.86,
        "yaw": -171.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 72,
           "class": "ImageResourceLevel",
           "width": 81,
           "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -4.6
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": {
   "fontColor": "#FFFFFF",
   "fontFamily": "Arial",
   "selectedBackgroundColor": "#202020",
   "rollOverOpacity": 0.8,
   "label": "Media",
   "backgroundColor": "#404040",
   "id": "Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
   "rollOverBackgroundColor": "#000000",
   "opacity": 0.4,
   "class": "Menu",
   "children": [
    {
     "class": "MenuItem",
     "label": "1 -XIX",
     "click": "this.mainPlayList.set('selectedIndex', 0)"
    },
    {
     "class": "MenuItem",
     "label": "2-XIX",
     "click": "this.mainPlayList.set('selectedIndex', 1)"
    },
    {
     "class": "MenuItem",
     "label": "3-XIX",
     "click": "this.mainPlayList.set('selectedIndex', 2)"
    },
    {
     "class": "MenuItem",
     "label": "4-XIX",
     "click": "this.mainPlayList.set('selectedIndex', 3)"
    },
    {
     "class": "MenuItem",
     "label": "5-XIX",
     "click": "this.mainPlayList.set('selectedIndex', 4)"
    },
    {
     "class": "MenuItem",
     "label": "1-1902",
     "click": "this.mainPlayList.set('selectedIndex', 5)"
    },
    {
     "class": "MenuItem",
     "label": "2-1902",
     "click": "this.mainPlayList.set('selectedIndex', 6)"
    },
    {
     "class": "MenuItem",
     "label": "3-1902",
     "click": "this.mainPlayList.set('selectedIndex', 7)"
    },
    {
     "class": "MenuItem",
     "label": "4-1902",
     "click": "this.mainPlayList.set('selectedIndex', 8)"
    },
    {
     "class": "MenuItem",
     "label": "5-1902",
     "click": "this.mainPlayList.set('selectedIndex', 9)"
    },
    {
     "class": "MenuItem",
     "label": "6-1902",
     "click": "this.mainPlayList.set('selectedIndex', 10)"
    },
    {
     "class": "MenuItem",
     "label": "7-1902",
     "click": "this.mainPlayList.set('selectedIndex', 11)"
    },
    {
     "class": "MenuItem",
     "label": "8-1902",
     "click": "this.mainPlayList.set('selectedIndex', 12)"
    },
    {
     "class": "MenuItem",
     "label": "9-1902",
     "click": "this.mainPlayList.set('selectedIndex', 13)"
    },
    {
     "class": "MenuItem",
     "label": "1-1909",
     "click": "this.mainPlayList.set('selectedIndex', 14)"
    },
    {
     "class": "MenuItem",
     "label": "2-1909",
     "click": "this.mainPlayList.set('selectedIndex', 15)"
    },
    {
     "class": "MenuItem",
     "label": "3-1909",
     "click": "this.mainPlayList.set('selectedIndex', 16)"
    },
    {
     "class": "MenuItem",
     "label": "4-1909",
     "click": "this.mainPlayList.set('selectedIndex', 17)"
    },
    {
     "class": "MenuItem",
     "label": "5-1909",
     "click": "this.mainPlayList.set('selectedIndex', 18)"
    },
    {
     "class": "MenuItem",
     "label": "1-1930",
     "click": "this.mainPlayList.set('selectedIndex', 19)"
    },
    {
     "class": "MenuItem",
     "label": "2-1930",
     "click": "this.mainPlayList.set('selectedIndex', 20)"
    },
    {
     "class": "MenuItem",
     "label": "3-1930",
     "click": "this.mainPlayList.set('selectedIndex', 21)"
    },
    {
     "class": "MenuItem",
     "label": "4-1930",
     "click": "this.mainPlayList.set('selectedIndex', 22)"
    },
    {
     "class": "MenuItem",
     "label": "5-1930",
     "click": "this.mainPlayList.set('selectedIndex', 23)"
    },
    {
     "class": "MenuItem",
     "label": "6-1930",
     "click": "this.mainPlayList.set('selectedIndex', 24)"
    },
    {
     "class": "MenuItem",
     "label": "7-1930",
     "click": "this.mainPlayList.set('selectedIndex', 25)"
    },
    {
     "class": "MenuItem",
     "label": "1-2018",
     "click": "this.mainPlayList.set('selectedIndex', 26)"
    },
    {
     "class": "MenuItem",
     "label": "2-2018",
     "click": "this.mainPlayList.set('selectedIndex', 27)"
    },
    {
     "class": "MenuItem",
     "label": "3-2018",
     "click": "this.mainPlayList.set('selectedIndex', 28)"
    },
    {
     "class": "MenuItem",
     "label": "4-2018",
     "click": "this.mainPlayList.set('selectedIndex', 29)"
    },
    {
     "class": "MenuItem",
     "label": "5-2018",
     "click": "this.mainPlayList.set('selectedIndex', 30)"
    },
    {
     "class": "MenuItem",
     "label": "6-2018",
     "click": "this.mainPlayList.set('selectedIndex', 31)"
    },
    {
     "class": "MenuItem",
     "label": "7-2018",
     "click": "this.mainPlayList.set('selectedIndex', 32)"
    },
    {
     "class": "MenuItem",
     "label": "8-2018",
     "click": "this.mainPlayList.set('selectedIndex', 33)"
    },
    {
     "class": "MenuItem",
     "label": "9-2018",
     "click": "this.mainPlayList.set('selectedIndex', 34)"
    },
    {
     "class": "MenuItem",
     "label": "10-2018",
     "click": "this.mainPlayList.set('selectedIndex', 35)"
    },
    {
     "class": "MenuItem",
     "label": "11-2018",
     "click": "this.mainPlayList.set('selectedIndex', 36)"
    }
   ],
   "selectedFontColor": "#FFFFFF",
   "rollOverFontColor": "#FFFFFF"
  },
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
     "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_8584253D_90FB_E020_41B2_F81B8DAD4ED4",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9, this.camera_8080EBF4_9BFD_073F_41E2_F21E24BC4B97); this.mainPlayList.set('selectedIndex', 0)"
          }
         ],
         "maps": [
          {
           "hfov": 5.51,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 7.28,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": 2.86
          }
         ],
         "items": [
          {
           "hfov": 5.51,
           "yaw": 7.28,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_0_0.png"
             }
            ]
           },
           "pitch": 2.86
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_84553870_90FA_E020_41D2_38967BDBE286",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea"
          }
         ],
         "maps": [
          {
           "hfov": 5.52,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -170.55,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -7.06
          }
         ],
         "items": [
          {
           "hfov": 5.52,
           "yaw": -170.55,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -7.06
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17.jpeg"
         }
        ]
       }
      }
     ],
     "hfovMin": 60,
     "hfovMax": 120,
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
       "yaw": 7.28,
       "distance": 1,
       "backwardYaw": -171.41
      }
     ],
     "label": "2-XIX",
     "mapLocations": [
      {
       "x": 250.48,
       "y": 535.42,
       "class": "PanoramaMapLocation",
       "angle": 171.77,
       "map": {
        "initialZoomFactor": 1,
        "fieldOfViewOverlayInsideOpacity": 0.77,
        "fieldOfViewOverlayOutsideColor": "#FFFFFF",
        "thumbnailUrl": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_t.png",
        "maximumZoomFactor": 1.2,
        "width": 443,
        "id": "map_9EAEC64D_90AA_6062_41DB_03640F689429",
        "minimumZoomFactor": 0.5,
        "height": 1058,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 1058,
           "class": "ImageResourceLevel",
           "width": 443,
           "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429.png"
          },
          {
           "height": 529,
           "class": "ImageResourceLevel",
           "grayscale": true,
           "width": 221,
           "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_lq.png"
          }
         ]
        },
        "fieldOfViewOverlayRadiusScale": 0.08,
        "label": "Siglo XIX",
        "overlays": [
         {
          "rollOverDisplay": false,
          "id": "overlay_9E249787_91C1_9E67_41DC_34B16AD8F5E8",
          "map": {
           "offsetY": 0,
           "x": 304.27,
           "width": 47.46,
           "y": 926.9,
           "height": 38.39,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 19,
              "class": "ImageResourceLevel",
              "width": 23,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_5_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 0)",
            "toolTip": "abrir"
           }
          ],
          "image": {
           "x": 303.79,
           "y": 926.52,
           "width": 47.46,
           "height": 38.39,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 38,
              "class": "ImageResourceLevel",
              "width": 47,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_5.png"
             }
            ]
           }
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_80CEA7ED_91FF_FDAB_41D6_59336BD80DB1",
          "map": {
           "offsetY": 0,
           "x": 229.94,
           "width": 42,
           "y": 513.97,
           "height": 43.5,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 21,
              "class": "ImageResourceLevel",
              "width": 20,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_6_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 1)",
            "toolTip": "abrir"
           }
          ],
          "image": {
           "x": 229.48,
           "y": 513.67,
           "width": 42,
           "height": 43.5,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 43,
              "class": "ImageResourceLevel",
              "width": 41,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_6.png"
             }
            ]
           }
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_80ECD076_91C0_92B8_41D9_05C53C4BA7E1",
          "map": {
           "offsetY": 0,
           "x": 157.46,
           "width": 43.5,
           "y": 163.97,
           "height": 42,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 20,
              "class": "ImageResourceLevel",
              "width": 21,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_7_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 2)",
            "toolTip": "abrir"
           }
          ],
          "image": {
           "x": 157.07,
           "y": 163.6,
           "width": 43.5,
           "height": 42,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 41,
              "class": "ImageResourceLevel",
              "width": 43,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_7.png"
             }
            ]
           }
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_8021C73B_91C1_FEA8_41C9_52813745CB19",
          "map": {
           "offsetY": 0,
           "x": 84.95,
           "width": 41.5,
           "y": 36,
           "height": 46.5,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 23,
              "class": "ImageResourceLevel",
              "width": 20,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_8_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 3)",
            "toolTip": "abrir"
           }
          ],
          "image": {
           "x": 84.48,
           "y": 35.66,
           "width": 41.5,
           "height": 46.5,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 46,
              "class": "ImageResourceLevel",
              "width": 41,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_8.png"
             }
            ]
           }
          },
          "useHandCursor": true
         },
         {
          "rollOverDisplay": false,
          "id": "overlay_8388B1CD_91C3_B5E8_41C8_D1EF1914CCF1",
          "map": {
           "offsetY": 0,
           "x": 49.47,
           "width": 43.5,
           "y": -15.95,
           "height": 48.5,
           "class": "HotspotMapOverlayMap",
           "offsetX": 0,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 24,
              "class": "ImageResourceLevel",
              "width": 21,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_9_map.gif"
             }
            ]
           }
          },
          "class": "AreaHotspotMapOverlay",
          "areas": [
           {
            "mapColor": "#FF0000",
            "class": "HotspotMapOverlayArea",
            "click": "this.mainPlayList.set('selectedIndex', 4)",
            "toolTip": "abrir"
           }
          ],
          "image": {
           "x": 48.91,
           "y": -15.61,
           "width": 43.5,
           "height": 48.5,
           "class": "HotspotMapOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 48,
              "class": "ImageResourceLevel",
              "width": 43,
              "url": "media/map_9EAEC64D_90AA_6062_41DB_03640F689429_HS_9.png"
             }
            ]
           }
          },
          "useHandCursor": true
         }
        ],
        "scaleMode": "fit_inside",
        "fieldOfViewOverlayOutsideOpacity": 0.2,
        "class": "Map",
        "fieldOfViewOverlayInsideColor": "#0000FF"
       }
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": -171.41,
    "distance": 1,
    "backwardYaw": 7.28
   }
  ],
  "label": "1 -XIX",
  "mapLocations": [
   {
    "x": 327.52,
    "y": 945.72,
    "class": "PanoramaMapLocation",
    "angle": 156,
    "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "preloadEnabled": false,
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_acceleration",
  "class": "PanoramaPlayer",
  "gyroscopeVerticalDraggingEnabled": true,
  "displayPlaybackBar": true,
  "viewerArea": "this.MainViewer",
  "buttonCardboardView": "this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4",
  "gyroscopeEnabled": true
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "viewerArea": {
   "toolTipPaddingRight": 6,
   "paddingLeft": 0,
   "paddingRight": 0,
   "toolTipPaddingLeft": 6,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontStyle": "normal",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "transitionMode": "fade_out_fade_in",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressRight": 0,
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarLeft": 0,
   "shadow": false,
   "paddingBottom": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "progressBorderRadius": 0,
   "playbackBarBorderSize": 0,
   "progressBorderSize": 0,
   "paddingTop": 0,
   "minWidth": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipBorderColor": "#767676",
   "playbackBarBorderRadius": 0,
   "progressOpacity": 1,
   "class": "ViewerArea",
   "progressBarBorderRadius": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarProgressBorderColor": "#000000",
   "progressBarBorderSize": 0,
   "playbackBarHeadHeight": 15,
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadShadowHorizontalLength": 0,
   "toolTipPaddingBottom": 4,
   "borderSize": 0,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipShadowOpacity": 1,
   "width": "95.455%",
   "toolTipOpacity": 1,
   "height": "88.816%",
   "toolTipShadowSpread": 0,
   "borderRadius": 0,
   "minHeight": 1,
   "progressBackgroundColorRatios": [
    0
   ],
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBarOpacity": 1,
   "progressLeft": 0,
   "playbackBarHeight": 10,
   "toolTipBackgroundColor": "#F6F6F6",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontSize": 12,
   "playbackBarProgressOpacity": 1,
   "playbackBarBottom": 0,
   "progressBottom": 2,
   "toolTipShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarHeadWidth": 6,
   "toolTipTextShadowColor": "#000000",
   "playbackBarHeadShadow": true,
   "playbackBarProgressBorderSize": 0,
   "playbackBarProgressBorderRadius": 0,
   "toolTipBorderRadius": 3,
   "toolTipShadowVerticalLength": 0,
   "bottom": "0%",
   "playbackBarBackgroundOpacity": 1,
   "id": "MapViewer",
   "toolTipBorderSize": 1,
   "playbackBarBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBorderColor": "#000000",
   "progressHeight": 10,
   "toolTipPaddingTop": 4,
   "toolTipShadowColor": "#333333",
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipFontWeight": "normal",
   "playbackBarOpacity": 1,
   "left": "1.3%",
   "playbackBarRight": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "progressBackgroundOpacity": 1,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipFontFamily": "Arial",
   "playbackBarHeadOpacity": 1
  },
  "movementMode": "constrained"
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 15.15,
   "pitch": 4.1
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
  "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_t.jpg",
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_85F0FC9B_90F6_60E7_41BC_5A099E427816",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)"
       }
      ],
      "maps": [
       {
        "hfov": 5.5,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 7.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 46,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -4.71
       }
      ],
      "items": [
       {
        "hfov": 5.5,
        "yaw": 7.41,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 80,
           "class": "ImageResourceLevel",
           "width": 92,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -4.71
       }
      ]
     },
     {
      "rollOverDisplay": false,
      "enabledInCardboard": true,
      "id": "overlay_850C4CA1_90F7_E020_41D4_1106D65E970A",
      "useHandCursor": true,
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_80930BCB_9BFD_0768_41E1_75E5D948A75E); this.mainPlayList.set('selectedIndex', 3)"
       }
      ],
      "maps": [
       {
        "hfov": 6.74,
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 176.52,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 57,
           "class": "ImageResourceLevel",
           "width": 58,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.61
       }
      ],
      "items": [
       {
        "hfov": 6.74,
        "yaw": 176.52,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 115,
           "class": "ImageResourceLevel",
           "width": 116,
           "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -14.61
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6.jpeg"
      }
     ]
    }
   }
  ],
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "panorama": {
     "partial": false,
     "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
     "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
     "frames": [
      {
       "thumbnailUrl": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_t.jpg",
       "class": "SphericPanoramaFrame",
       "overlays": [
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_8512D6B4_90F5_E021_41C3_A4DD61D21517",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6, this.camera_80AC6C1D_9BFD_00E8_41A4_2BFBB71E440E); this.mainPlayList.set('selectedIndex', 2)"
          }
         ],
         "maps": [
          {
           "hfov": 5.49,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 4.42,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 40,
              "class": "ImageResourceLevel",
              "width": 46,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -5.58
          }
         ],
         "items": [
          {
           "hfov": 5.49,
           "yaw": 4.42,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 80,
              "class": "ImageResourceLevel",
              "width": 92,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -5.58
          }
         ]
        },
        {
         "rollOverDisplay": false,
         "enabledInCardboard": true,
         "id": "overlay_86B783D6_90EA_2060_41C8_7AF662F3E5F8",
         "useHandCursor": true,
         "class": "HotspotPanoramaOverlay",
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD, this.camera_80B63C09_9BFD_00E9_41D5_0010E5AE3221); this.mainPlayList.set('selectedIndex', 4)"
          }
         ],
         "maps": [
          {
           "hfov": 6.11,
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 163.65,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 57,
              "class": "ImageResourceLevel",
              "width": 58,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.55
          }
         ],
         "items": [
          {
           "hfov": 6.11,
           "yaw": 163.65,
           "class": "HotspotPanoramaOverlayImage",
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 115,
              "class": "ImageResourceLevel",
              "width": 116,
              "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.55
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3000,
          "class": "ImageResourceLevel",
          "width": 6000,
          "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_hq.jpeg"
         },
         {
          "height": 1608,
          "class": "ImageResourceLevel",
          "width": 3217,
          "url": "media/panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896.jpeg"
         }
        ]
       }
      }
     ],
     "hfovMin": 60,
     "hfovMax": 120,
     "pitch": 0,
     "hfov": 360,
     "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "panorama": {
        "partial": false,
        "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
        "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
        "frames": [
         {
          "thumbnailUrl": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_t.jpg",
          "class": "SphericPanoramaFrame",
          "overlays": [
           {
            "rollOverDisplay": false,
            "enabledInCardboard": true,
            "id": "overlay_8557F3EE_90EB_E021_41CF_493986FDA0F4",
            "useHandCursor": true,
            "class": "HotspotPanoramaOverlay",
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896, this.camera_80887BE1_9BFD_0759_41D4_FB93DAFCAC63); this.mainPlayList.set('selectedIndex', 3)"
             }
            ],
            "maps": [
             {
              "hfov": 5.48,
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -3.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 46,
                 "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.1
             }
            ],
            "items": [
             {
              "hfov": 5.48,
              "yaw": -3.69,
              "class": "HotspotPanoramaOverlayImage",
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 79,
                 "class": "ImageResourceLevel",
                 "width": 92,
                 "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -7.1
             }
            ]
           }
          ],
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3000,
             "class": "ImageResourceLevel",
             "width": 6000,
             "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_hq.jpeg"
            },
            {
             "height": 1608,
             "class": "ImageResourceLevel",
             "width": 3217,
             "url": "media/panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD.jpeg"
            }
           ]
          }
         }
        ],
        "hfovMin": 60,
        "hfovMax": 120,
        "pitch": 0,
        "hfov": 360,
        "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "panorama": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
          "yaw": -3.69,
          "distance": 1,
          "backwardYaw": 163.65
         }
        ],
        "label": "5-XIX",
        "mapLocations": [
         {
          "x": 70.66,
          "y": 8.64,
          "class": "PanoramaMapLocation",
          "angle": 145,
          "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
         }
        ],
        "class": "Panorama",
        "vfov": 180
       },
       "yaw": 163.65,
       "distance": 1,
       "backwardYaw": -3.69
      },
      {
       "class": "AdjacentPanorama",
       "panorama": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
       "yaw": 4.42,
       "distance": 1,
       "backwardYaw": 176.52
      }
     ],
     "label": "4-XIX",
     "mapLocations": [
      {
       "x": 105.23,
       "y": 58.91,
       "class": "PanoramaMapLocation",
       "angle": 139.54,
       "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
      }
     ],
     "class": "Panorama",
     "vfov": 180
    },
    "yaw": 176.52,
    "distance": 1,
    "backwardYaw": 4.42
   }
  ],
  "label": "3-XIX",
  "mapLocations": [
   {
    "x": 178.82,
    "y": 184.6,
    "class": "PanoramaMapLocation",
    "angle": 170.33,
    "map": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "1-1902",
  "mapLocations": [
   {
    "x": 300.54,
    "y": 981.35,
    "class": "PanoramaMapLocation",
    "angle": 172.3,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.77,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_t.png",
     "maximumZoomFactor": 1.2,
     "width": 425,
     "id": "map_9F8D8EC4_90AA_6061_41D7_7A408258BB83",
     "minimumZoomFactor": 0.5,
     "height": 1104,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1104,
        "class": "ImageResourceLevel",
        "width": 425,
        "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83.png"
       },
       {
        "height": 552,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 212,
        "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_lq.png"
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.1,
     "label": "1902",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_9EBECC26_91C7_7259_41DA_777106569EB6",
       "map": {
        "offsetY": 0,
        "x": 282.57,
        "width": 36.58,
        "y": 963.61,
        "height": 35.53,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 17,
           "class": "ImageResourceLevel",
           "width": 18,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_0_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "x": 282.25,
        "y": 963.59,
        "width": 36.58,
        "height": 35.53,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 35,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9D36A63E_9653_83A2_41D6_BB94FC1D3E64",
       "map": {
        "offsetY": 0,
        "x": 264.83,
        "width": 37.81,
        "y": 879.21,
        "height": 43.37,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 18,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_1_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "x": 264.45,
        "y": 879.13,
        "width": 37.81,
        "height": 43.37,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 43,
           "class": "ImageResourceLevel",
           "width": 37,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9BE8E241_9656_83E1_41E0_BBEBF65A5EFE",
       "map": {
        "offsetY": 0,
        "x": 236.89,
        "width": 40.71,
        "y": 747.72,
        "height": 40.47,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_2_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "x": 236.52,
        "y": 747.71,
        "width": 40.71,
        "height": 40.47,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_98F15776_9657_81A3_41C7_7FA4AC8B8077",
       "map": {
        "offsetY": 0,
        "x": 194.69,
        "width": 41.17,
        "y": 538.56,
        "height": 51.16,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_3_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "x": 194.29,
        "y": 538.56,
        "width": 41.17,
        "height": 51.16,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_98AB1269_9652_83A1_4190_D8DA8E751A3D",
       "map": {
        "offsetY": 0,
        "x": 168.09,
        "width": 38.84,
        "y": 401.58,
        "height": 42.39,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 21,
           "class": "ImageResourceLevel",
           "width": 19,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_4_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "x": 167.68,
        "y": 401.55,
        "width": 38.84,
        "height": 42.39,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 38,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_99BE03CD_9653_80E1_41D2_497CD76435BE",
       "map": {
        "offsetY": 0,
        "x": 148.08,
        "width": 38.56,
        "y": 306.08,
        "height": 50.74,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 19,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_5_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "x": 147.7,
        "y": 306.01,
        "width": 38.56,
        "height": 50.74,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 38,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_99E0A0FE_9651_80A3_41D2_4F29C8DF8FBE",
       "map": {
        "offsetY": 0,
        "x": 103.53,
        "width": 43.79,
        "y": 144.23,
        "height": 41.57,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_6_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "x": 103.2,
        "y": 144.2,
        "width": 43.79,
        "height": 41.57,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 43,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_9924F686_9671_8363_41D2_82C048509502",
       "map": {
        "offsetY": 0,
        "x": 52.63,
        "width": 41.26,
        "y": 67.94,
        "height": 41.87,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_7_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "x": 52.26,
        "y": 67.89,
        "width": 41.26,
        "height": 41.87,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 41,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_7.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_86A89A0F_9673_8361_41E2_46D2B6ADB985",
       "map": {
        "offsetY": 0,
        "x": -1.22,
        "width": 41.26,
        "y": 12.85,
        "height": 39.42,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 19,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_8_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 13)"
        }
       ],
       "image": {
        "x": -0.85,
        "y": 12.78,
        "width": 41.26,
        "height": 39.42,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 39,
           "class": "ImageResourceLevel",
           "width": 41,
           "url": "media/map_9F8D8EC4_90AA_6061_41D7_7A408258BB83_HS_8.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#0000FF"
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "2-1902",
  "mapLocations": [
   {
    "x": 283.35,
    "y": 900.81,
    "class": "PanoramaMapLocation",
    "angle": 168.69,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "3-1902",
  "mapLocations": [
   {
    "x": 256.87,
    "y": 767.94,
    "class": "PanoramaMapLocation",
    "angle": 161.57,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "4-1902",
  "mapLocations": [
   {
    "x": 214.88,
    "y": 564.13,
    "class": "PanoramaMapLocation",
    "angle": 166.37,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "5-1902",
  "mapLocations": [
   {
    "x": 187.1,
    "y": 422.74,
    "class": "PanoramaMapLocation",
    "angle": 159.72,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "6-1902",
  "mapLocations": [
   {
    "x": 166.98,
    "y": 331.38,
    "class": "PanoramaMapLocation",
    "angle": 163.81,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "7-1902",
  "mapLocations": [
   {
    "x": 125.1,
    "y": 164.99,
    "class": "PanoramaMapLocation",
    "angle": 160.97,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "8-1902",
  "mapLocations": [
   {
    "x": 72.89,
    "y": 88.82,
    "class": "PanoramaMapLocation",
    "angle": 152.15,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "9-1902",
  "mapLocations": [
   {
    "x": 19.78,
    "y": 32.49,
    "class": "PanoramaMapLocation",
    "angle": 144.69,
    "map": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "1-1909",
  "mapLocations": [
   {
    "x": 237.58,
    "y": 967.1,
    "class": "PanoramaMapLocation",
    "angle": 178.26,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.77,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_t.png",
     "maximumZoomFactor": 1.2,
     "width": 430,
     "id": "map_9EB350F4_90AA_6020_41DC_A205F828306D",
     "minimumZoomFactor": 0.5,
     "height": 1081,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1081,
        "class": "ImageResourceLevel",
        "width": 430,
        "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D.png"
       },
       {
        "height": 540,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 215,
        "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_lq.png"
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.11,
     "label": "1909",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_86BB04EC_9672_80A7_41D7_0321CFE8A541",
       "map": {
        "offsetY": 0,
        "x": 213.04,
        "width": 49.99,
        "y": 941.52,
        "height": 51.43,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 24,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_0_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 14)"
        }
       ],
       "image": {
        "x": 212.58,
        "y": 941.38,
        "width": 49.99,
        "height": 51.43,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 51,
           "class": "ImageResourceLevel",
           "width": 49,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8748A657_9671_83E2_41D8_0887F34FBC2E",
       "map": {
        "offsetY": 0,
        "x": 197.22,
        "width": 57.09,
        "y": 558.17,
        "height": 59.25,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_1_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 15)"
        }
       ],
       "image": {
        "x": 196.82,
        "y": 558.02,
        "width": 57.09,
        "height": 59.25,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 57,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_87591350_967E_81FF_41E2_C4CCF1BDEB5B",
       "map": {
        "offsetY": 0,
        "x": 188.53,
        "width": 60.34,
        "y": 337.01,
        "height": 59.25,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 30,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_2_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "image": {
        "x": 188.11,
        "y": 336.91,
        "width": 60.34,
        "height": 59.25,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 59,
           "class": "ImageResourceLevel",
           "width": 60,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_84982AD3_9672_80E1_41DD_063A762AD1EB",
       "map": {
        "offsetY": 0,
        "x": 185.33,
        "width": 54.01,
        "y": 177.35,
        "height": 58.45,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 29,
           "class": "ImageResourceLevel",
           "width": 27,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_3_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "image": {
        "x": 184.96,
        "y": 177.17,
        "width": 54.01,
        "height": 58.45,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 58,
           "class": "ImageResourceLevel",
           "width": 54,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8589D285_9672_8361_41D4_4537B741DC5C",
       "map": {
        "offsetY": 0,
        "x": 129.47,
        "width": 60.22,
        "y": 12.41,
        "height": 56.67,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 30,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_4_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "image": {
        "x": 129.05,
        "y": 12.24,
        "width": 60.22,
        "height": 56.67,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 60,
           "url": "media/map_9EB350F4_90AA_6020_41DC_A205F828306D_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_to_height",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#0000FF"
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "2-1909",
  "mapLocations": [
   {
    "x": 225.37,
    "y": 587.65,
    "class": "PanoramaMapLocation",
    "angle": 177.4,
    "map": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "3-1909",
  "mapLocations": [
   {
    "x": 218.28,
    "y": 366.54,
    "class": "PanoramaMapLocation",
    "angle": 172.33,
    "map": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "4-1909",
  "mapLocations": [
   {
    "x": 211.96,
    "y": 206.39,
    "class": "PanoramaMapLocation",
    "angle": 176.99,
    "map": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "5-1909",
  "mapLocations": [
   {
    "x": 159.16,
    "y": 40.57,
    "class": "PanoramaMapLocation",
    "angle": 162.47,
    "map": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "1-1930",
  "mapLocations": [
   {
    "x": 318.9,
    "y": 1298.33,
    "class": "PanoramaMapLocation",
    "angle": 185.29,
    "map": {
     "initialZoomFactor": 1,
     "fieldOfViewOverlayInsideOpacity": 0.77,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "thumbnailUrl": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_t.png",
     "maximumZoomFactor": 1.2,
     "width": 532,
     "id": "map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE",
     "minimumZoomFactor": 0.5,
     "height": 1392,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1392,
        "class": "ImageResourceLevel",
        "width": 532,
        "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE.png"
       },
       {
        "height": 696,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 266,
        "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_lq.png"
       }
      ]
     },
     "fieldOfViewOverlayRadiusScale": 0.1,
     "label": "1930",
     "overlays": [
      {
       "rollOverDisplay": false,
       "id": "overlay_96C0160A_9BCB_00EB_41D6_5E1281A87B11",
       "map": {
        "offsetY": 0,
        "x": 284.49,
        "width": 68.82,
        "y": 1264.38,
        "height": 67.9,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 34,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_0_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "image": {
        "x": 284.49,
        "y": 1264.38,
        "width": 68.82,
        "height": 67.9,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 68,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_0.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_952D5C57_9BCD_0179_41E1_E93FA217DF66",
       "map": {
        "offsetY": 0,
        "x": 235.06,
        "width": 65.34,
        "y": 1034.45,
        "height": 63.26,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 31,
           "class": "ImageResourceLevel",
           "width": 32,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_1_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 20)"
        }
       ],
       "image": {
        "x": 235.06,
        "y": 1034.45,
        "width": 65.34,
        "height": 63.26,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 63,
           "class": "ImageResourceLevel",
           "width": 65,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_1.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_94BC707B_9BCD_0129_41D5_A22635ABAAEC",
       "map": {
        "offsetY": 0,
        "x": 300.25,
        "width": 78.52,
        "y": 842.84,
        "height": 67.75,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 33,
           "class": "ImageResourceLevel",
           "width": 39,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_2_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 21)"
        }
       ],
       "image": {
        "x": 300.25,
        "y": 842.84,
        "width": 78.52,
        "height": 67.75,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 67,
           "class": "ImageResourceLevel",
           "width": 78,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_2.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8BE02A9D_9BCD_01E9_41D9_7A58A3363BE5",
       "map": {
        "offsetY": 0,
        "x": 215.96,
        "width": 71.67,
        "y": 699.7,
        "height": 77.54,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 38,
           "class": "ImageResourceLevel",
           "width": 35,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_3_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 22)"
        }
       ],
       "image": {
        "x": 215.96,
        "y": 699.7,
        "width": 71.67,
        "height": 77.54,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 77,
           "class": "ImageResourceLevel",
           "width": 71,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_3.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B6DE0A4_9BCB_01D8_41C8_6C6B969074AA",
       "map": {
        "offsetY": 0,
        "x": 181.1,
        "width": 89.25,
        "y": 289.62,
        "height": 84.82,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 42,
           "class": "ImageResourceLevel",
           "width": 44,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_4_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 23)"
        }
       ],
       "image": {
        "x": 181.1,
        "y": 289.62,
        "width": 89.25,
        "height": 84.82,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 89,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_4.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B262C07_9BC5_00D8_41E0_D05121292D85",
       "map": {
        "offsetY": 0,
        "x": 244.38,
        "width": 67.04,
        "y": 81.42,
        "height": 75.14,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 37,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_5_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 24)"
        }
       ],
       "image": {
        "x": 244.38,
        "y": 81.42,
        "width": 67.04,
        "height": 75.14,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 75,
           "class": "ImageResourceLevel",
           "width": 67,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_5.png"
          }
         ]
        }
       },
       "useHandCursor": true
      },
      {
       "rollOverDisplay": false,
       "id": "overlay_8B3B74D3_9BC5_0179_41DC_F0FD1271D574",
       "map": {
        "offsetY": 0,
        "x": 143.02,
        "width": 67.69,
        "y": 30.08,
        "height": 64.23,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 32,
           "class": "ImageResourceLevel",
           "width": 33,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_6_map.gif"
          }
         ]
        }
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 25)"
        }
       ],
       "image": {
        "x": 143.02,
        "y": 30.08,
        "width": 67.69,
        "height": 64.23,
        "class": "HotspotMapOverlayImage",
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 64,
           "class": "ImageResourceLevel",
           "width": 67,
           "url": "media/map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE_HS_6.png"
          }
         ]
        }
       },
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_to_height",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "class": "Map",
     "fieldOfViewOverlayInsideColor": "#0000FF"
    }
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_840062E7_9651_80A1_41B5_45F995BFFE78_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "2-1930",
  "mapLocations": [
   {
    "x": 267.73,
    "y": 1066.08,
    "class": "PanoramaMapLocation",
    "angle": 180,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "3-1930",
  "mapLocations": [
   {
    "x": 339.51,
    "y": 876.72,
    "class": "PanoramaMapLocation",
    "angle": 180.7,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "4-1930",
  "mapLocations": [
   {
    "x": 251.8,
    "y": 738.47,
    "class": "PanoramaMapLocation",
    "angle": 177.99,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "5-1930",
  "mapLocations": [
   {
    "x": 225.73,
    "y": 332.03,
    "class": "PanoramaMapLocation",
    "angle": 177.83,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "6-1930",
  "mapLocations": [
   {
    "x": 277.9,
    "y": 118.99,
    "class": "PanoramaMapLocation",
    "angle": 171.42,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FB493_9651_8761_41E2_4294B174FE26",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FB493_9651_8761_41E2_4294B174FE26_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "7-1930",
  "mapLocations": [
   {
    "x": 176.87,
    "y": 62.2,
    "class": "PanoramaMapLocation",
    "angle": 175.17,
    "map": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE"
   }
  ],
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FB493_9651_8761_41E2_4294B174FE26_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841F9B75_9651_81A1_41AD_C3262823BF61_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "1-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "2-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "3-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841FB58E_9651_8163_41B9_4845701F08EE",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841FB58E_9651_8163_41B9_4845701F08EE_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "4-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "5-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_840052A4_964E_80A7_41DB_1236A96A4274",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_840052A4_964E_80A7_41DB_1236A96A4274_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "6-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84008982_964E_8163_41C0_E2390B3D0FDF_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "7-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "8-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_84008721_964E_81A1_41DA_58E92351CE0C",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_84008721_964E_81A1_41DA_58E92351CE0C_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "9-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "10-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "partial": false,
  "id": "panorama_83899584_964E_8167_41CF_AD476F5C0371",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3000,
       "class": "ImageResourceLevel",
       "width": 6000,
       "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_hq.jpeg"
      },
      {
       "height": 1608,
       "class": "ImageResourceLevel",
       "width": 3217,
       "url": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371.jpeg"
      }
     ]
    }
   }
  ],
  "thumbnailUrl": "media/panorama_83899584_964E_8167_41CF_AD476F5C0371_t.jpg",
  "hfovMin": 60,
  "hfovMax": 120,
  "pitch": 0,
  "hfov": 360,
  "cardboardMenu": "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
  "label": "11-2018",
  "class": "Panorama",
  "vfov": 180
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "panorama_83899584_964E_8167_41CF_AD476F5C0371_camera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_80C9DB58_9BFD_0777_41E2_79DED570DC80",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C9DB58_9BFD_0777_41E2_79DED570DC80, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C64B59_9BFD_0769_41E3_3955D74533AB",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C64B59_9BFD_0769_41E3_3955D74533AB, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C6FB5A_9BFD_076B_41D6_549072503949",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C6FB5A_9BFD_076B_41D6_549072503949, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C69B5B_9BFD_0769_41E2_6CEAF96E253D",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C69B5B_9BFD_0769_41E2_6CEAF96E253D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C74B5B_9BFD_0769_41D6_FDB8CA3A4FA0",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C74B5B_9BFD_0769_41D6_FDB8CA3A4FA0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C7FB5C_9BFD_076F_41D0_0FCBEE546796",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C7FB5C_9BFD_076F_41D0_0FCBEE546796, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C7BB5C_9BFD_076F_41D1_0CFF222B3548",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C7BB5C_9BFD_076F_41D1_0CFF222B3548, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C46B5D_9BFD_0769_41D4_0ACDCCE85906",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C46B5D_9BFD_0769_41D4_0ACDCCE85906, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C41B5E_9BFD_076B_41D8_5E643A2301E9",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C41B5E_9BFD_076B_41D8_5E643A2301E9, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C4CB5E_9BFD_076B_41E1_5C305DFF7A90",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C4CB5E_9BFD_076B_41E1_5C305DFF7A90, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C57B5F_9BFD_0769_41DB_6BE005187D5F",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C57B5F_9BFD_0769_41DB_6BE005187D5F, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C52B60_9BFD_0757_4160_AF90EC63CCF8",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C52B60_9BFD_0757_4160_AF90EC63CCF8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C5DB61_9BFD_0759_41E3_287CDDCD0B57",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C5DB61_9BFD_0759_41E3_287CDDCD0B57, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C59B62_9BFD_075B_41DE_4BA23D29E613",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C59B62_9BFD_075B_41DE_4BA23D29E613, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C24B62_9BFD_075B_41E1_1A1ADD1DE35D",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C24B62_9BFD_075B_41E1_1A1ADD1DE35D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C2FB63_9BFD_0759_41A6_200B24C45057",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C2FB63_9BFD_0759_41A6_200B24C45057, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C2AB64_9BFD_075F_41D2_689F2D2DB9A2",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C2AB64_9BFD_075F_41D2_689F2D2DB9A2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C35B65_9BFD_0759_41C3_80D4076668B3",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C35B65_9BFD_0759_41C3_80D4076668B3, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C22B66_9BFD_075B_41A8_EA4CB84969C0",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C22B66_9BFD_075B_41A8_EA4CB84969C0, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C2DB66_9BFD_075B_41DF_8B2A43E2CD74",
    "media": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C2DB66_9BFD_075B_41DF_8B2A43E2CD74, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C29B67_9BFD_0759_41CC_72EC729E3C43",
    "media": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C29B67_9BFD_0759_41CC_72EC729E3C43, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C33B67_9BFD_0759_41DF_497146C8DAE8",
    "media": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C33B67_9BFD_0759_41DF_497146C8DAE8, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C3EB68_9BFD_0757_41E0_F645F7B39393",
    "media": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C3EB68_9BFD_0757_41E0_F645F7B39393, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C38B69_9BFD_0729_41E1_984B8153AD3B",
    "media": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C38B69_9BFD_0729_41E1_984B8153AD3B, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C03B6A_9BFD_072B_41E1_342680938EAD",
    "media": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C03B6A_9BFD_072B_41E1_342680938EAD, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera"
   },
   {
    "id": "PanoramaPlayListItem_80C0DB6B_9BFD_0729_41D6_F163FBAEFEE2",
    "media": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_80C0DB6B_9BFD_0729_41D6_F163FBAEFEE2, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "media": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
    "media": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
    "media": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
    "media": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
    "media": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
    "media": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
    "media": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
    "media": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
    "media": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
    "media": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 0)",
    "media": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371_camera"
   }
  ]
 },
 "this.map_9EAEC64D_90AA_6062_41DB_03640F689429",
 "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83",
 "this.map_9EB350F4_90AA_6020_41DC_A205F828306D",
 "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE",
 {
  "initialZoomFactor": 1,
  "fieldOfViewOverlayInsideOpacity": 0.4,
  "fieldOfViewOverlayOutsideColor": "#000000",
  "thumbnailUrl": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_t.png",
  "maximumZoomFactor": 1.2,
  "width": 539,
  "id": "map_9EB11478_90AA_6021_41E1_833B5B7EE0C7",
  "minimumZoomFactor": 0.5,
  "height": 1401,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "height": 1401,
     "class": "ImageResourceLevel",
     "width": 539,
     "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7.png"
    },
    {
     "height": 700,
     "class": "ImageResourceLevel",
     "grayscale": true,
     "width": 269,
     "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_lq.png"
    }
   ]
  },
  "fieldOfViewOverlayRadiusScale": 0.3,
  "label": "2018",
  "overlays": [
   {
    "rollOverDisplay": false,
    "id": "overlay_8951EDC2_9BDD_035B_41E2_88DEE66FA175",
    "map": {
     "offsetY": 0,
     "x": 274.79,
     "width": 60.08,
     "y": 1294.78,
     "height": 60.08,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 30,
        "class": "ImageResourceLevel",
        "width": 30,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_0_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 26)"
     }
    ],
    "image": {
     "x": 274.79,
     "y": 1294.78,
     "width": 60.08,
     "height": 60.08,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 60,
        "class": "ImageResourceLevel",
        "width": 60,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_0.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_88669123_9BDD_00D9_41DE_4B4A84B35575",
    "map": {
     "offsetY": 0,
     "x": 268.79,
     "width": 61.27,
     "y": 1199.38,
     "height": 59.91,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 29,
        "class": "ImageResourceLevel",
        "width": 30,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_1_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 27)"
     }
    ],
    "image": {
     "x": 268.79,
     "y": 1199.38,
     "width": 61.27,
     "height": 59.91,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 59,
        "class": "ImageResourceLevel",
        "width": 61,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_1.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8FAD6ABE_9BDD_012B_41CE_5B814969FDDB",
    "map": {
     "offsetY": 0,
     "x": 225.41,
     "width": 57.86,
     "y": 1125.37,
     "height": 57.18,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 28,
        "class": "ImageResourceLevel",
        "width": 28,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_2_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 28)"
     }
    ],
    "image": {
     "x": 225.41,
     "y": 1125.37,
     "width": 57.86,
     "height": 57.18,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 57,
        "class": "ImageResourceLevel",
        "width": 57,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_2.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8FECE55C_9BDD_0368_41CF_64484E3A1A7C",
    "map": {
     "offsetY": 0,
     "x": 205.22,
     "width": 76.78,
     "y": 841.92,
     "height": 73.35,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 36,
        "class": "ImageResourceLevel",
        "width": 38,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_3_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 29)"
     }
    ],
    "image": {
     "x": 205.22,
     "y": 841.92,
     "width": 76.78,
     "height": 73.35,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 73,
        "class": "ImageResourceLevel",
        "width": 76,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_3.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8EC09586_9BDD_03D8_41C3_4DEE9E085F4A",
    "map": {
     "offsetY": 0,
     "x": 299.42,
     "width": 71.66,
     "y": 799.51,
     "height": 69.09,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 34,
        "class": "ImageResourceLevel",
        "width": 35,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_4_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 30)"
     }
    ],
    "image": {
     "x": 299.42,
     "y": 799.51,
     "width": 71.66,
     "height": 69.09,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 69,
        "class": "ImageResourceLevel",
        "width": 71,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_4.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8E303279_9BDB_0128_41E2_77C598809B23",
    "map": {
     "offsetY": 0,
     "x": 192.37,
     "width": 80.5,
     "y": 580.11,
     "height": 74.81,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 37,
        "class": "ImageResourceLevel",
        "width": 40,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_5_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 31)"
     }
    ],
    "image": {
     "x": 192.37,
     "y": 580.11,
     "width": 80.5,
     "height": 74.81,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 74,
        "class": "ImageResourceLevel",
        "width": 80,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_5.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8D6DD2B5_9BC7_0139_41DC_57075A2CB79C",
    "map": {
     "offsetY": 0,
     "x": 227.45,
     "width": 73.51,
     "y": 410.69,
     "height": 77.53,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 38,
        "class": "ImageResourceLevel",
        "width": 36,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_6_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 32)"
     }
    ],
    "image": {
     "x": 227.45,
     "y": 410.69,
     "width": 73.51,
     "height": 77.53,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 77,
        "class": "ImageResourceLevel",
        "width": 73,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_6.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8C520368_9BC5_0757_41E2_EC7B69BDA5A0",
    "map": {
     "offsetY": 0,
     "x": 146.23,
     "width": 71.9,
     "y": 374.52,
     "height": 68.68,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 34,
        "class": "ImageResourceLevel",
        "width": 35,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_7_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 33)"
     }
    ],
    "image": {
     "x": 146.23,
     "y": 374.52,
     "width": 71.9,
     "height": 68.68,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 68,
        "class": "ImageResourceLevel",
        "width": 71,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_7.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8C58A74D_9BCD_0F69_41E0_2F55C8785C9C",
    "map": {
     "offsetY": 0,
     "x": 225.89,
     "width": 80.01,
     "y": 228.29,
     "height": 99.23,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 49,
        "class": "ImageResourceLevel",
        "width": 40,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_8_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 34)"
     }
    ],
    "image": {
     "x": 225.89,
     "y": 228.29,
     "width": 80.01,
     "height": 99.23,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 99,
        "class": "ImageResourceLevel",
        "width": 80,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_8.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8CC28F58_9BCD_FF68_41DD_577DE5939CBC",
    "map": {
     "offsetY": 0,
     "x": 199.46,
     "width": 94.43,
     "y": 117.75,
     "height": 80.01,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 40,
        "class": "ImageResourceLevel",
        "width": 47,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_9_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 35)"
     }
    ],
    "image": {
     "x": 199.46,
     "y": 117.75,
     "width": 94.43,
     "height": 80.01,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 80,
        "class": "ImageResourceLevel",
        "width": 94,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_9.png"
       }
      ]
     }
    },
    "useHandCursor": true
   },
   {
    "rollOverDisplay": false,
    "id": "overlay_8C075D17_9BCD_00F9_41B7_EF3B54191C6D",
    "map": {
     "offsetY": 0,
     "x": 170.62,
     "width": 89.62,
     "y": 2.4,
     "height": 101.64,
     "class": "HotspotMapOverlayMap",
     "offsetX": 0,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 50,
        "class": "ImageResourceLevel",
        "width": 44,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_10_map.gif"
       }
      ]
     }
    },
    "class": "AreaHotspotMapOverlay",
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotMapOverlayArea",
      "click": "this.mainPlayList.set('selectedIndex', 36)"
     }
    ],
    "image": {
     "x": 170.62,
     "y": 2.4,
     "width": 89.62,
     "height": 101.64,
     "class": "HotspotMapOverlayImage",
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 101,
        "class": "ImageResourceLevel",
        "width": 89,
        "url": "media/map_9EB11478_90AA_6021_41E1_833B5B7EE0C7_HS_10.png"
       }
      ]
     }
    },
    "useHandCursor": true
   }
  ],
  "scaleMode": "fit_to_height",
  "fieldOfViewOverlayOutsideOpacity": 0,
  "class": "Map",
  "fieldOfViewOverlayInsideColor": "#FFFFFF"
 },
 {
  "class": "PlayList",
  "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EAEC64D_90AA_6062_41DB_03640F689429",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9F8D8EC4_90AA_6061_41D7_7A408258BB83",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EB350F4_90AA_6020_41DC_A205F828306D",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EAEC29F_90AA_601F_41B5_EC13A7295FFE",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   },
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_9EB11478_90AA_6021_41E1_833B5B7EE0C7",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 0, 1)",
    "media": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA34C9_8DD1_CAA7_41AC_942C83964EC9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 1, 2)",
    "media": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495B4CB_8DD6_4ABB_41DE_4AF4A9BF8D17_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 2, 3)",
    "media": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8495ACAD_8DD6_5AFF_4199_575A775142D6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 3, 4)",
    "media": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA74AE_8DD6_4AFD_41D2_5DE784B11896_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 4, 5)",
    "media": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA7471_8DD6_4A67_41B9_8E765AB5F0DD_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 5, 6)",
    "media": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA3C63_8DD6_5A6B_41CE_8696BAF2EAC4_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 6, 7)",
    "media": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA3415_8DD6_49AE_41DB_5D8A848E23E3_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 7, 8)",
    "media": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABBD8_8DD6_BEA5_41D8_8E78239EF58F_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 8, 9)",
    "media": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAD39A_8DD6_CEDA_41DA_3EBF75EB4419_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 9, 10)",
    "media": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABB7C_8DD6_DE5D_4187_6A56C706F3D6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 10, 11)",
    "media": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAE34E_8DD6_CFBA_41DF_DFA9C8BD0717_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 11, 12)",
    "media": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8B11_8DD6_FFA7_41A3_B626281DF952_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 12, 13)",
    "media": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EAE302_8DD6_CFA5_41D9_3C278D397635_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 13, 14)",
    "media": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8AE4_8DD6_DE6D_41BC_EE0B6C00FBF5_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 14, 15)",
    "media": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA9AA8_8DD6_BEE5_41C5_AAA7D41BD1C5_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 15, 16)",
    "media": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA427A_8DD6_4E65_41B9_791110DF5097_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 16, 17)",
    "media": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EABA5B_8DD6_5E5A_41C6_8DDA5EE20E73_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 17, 18)",
    "media": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA723D_8DD6_49DF_41D6_768E104CF4CF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 18, 19)",
    "media": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84EA8A1F_8DD6_79DB_41D1_7993B7A0DCC8_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 19, 20)",
    "media": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FBBA6_9651_80A3_41DA_FE273A36CDE1_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 20, 21)",
    "media": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_840062E7_9651_80A1_41B5_45F995BFFE78_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 21, 22)",
    "media": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F89C8_9651_80EF_41C9_5A83D3B94CE9_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 22, 23)",
    "media": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F80C2_9651_80E3_41E1_6485B8FD5BE7_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 23, 24)",
    "media": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FE75A_9651_81E3_41D5_AEB0610C5DC6_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 24, 25)",
    "media": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FFDE6_9651_80A3_41D2_81F2F952D891_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 25, 26)",
    "media": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FB493_9651_8761_41E2_4294B174FE26_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 26, 27)",
    "media": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841F9B75_9651_81A1_41AD_C3262823BF61_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 27, 28)",
    "media": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FA1FB_9651_80A1_41DB_93FE45611A99_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 28, 29)",
    "media": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FA7FF_9651_80A2_41E1_0F9D51FA0A3D_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 29, 30)",
    "media": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841FB58E_9651_8163_41B9_4845701F08EE_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 30, 31)",
    "media": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84007C69_964E_87A1_41CF_93DBFBBF3595_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 31, 32)",
    "media": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_840052A4_964E_80A7_41DB_1236A96A4274_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 32, 33)",
    "media": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84008982_964E_8163_41C0_E2390B3D0FDF_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 33, 34)",
    "media": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_8400702D_964E_BFA1_41DF_2EE1F6D29584_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 34, 35)",
    "media": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_84008721_964E_81A1_41DA_58E92351CE0C_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 35, 36)",
    "media": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_841D7E1F_964E_8361_41B3_05A148B7D47E_camera"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist, 36, 0)",
    "media": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_83899584_964E_8167_41CF_AD476F5C0371_camera"
   }
  ]
 },
 "this.Menu_80F2FB80_9BFD_07D7_41E0_04B7C0A7D0D6",
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_80969BB8_9BFD_0737_4180_B975D529DB16",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -172.72,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_80930BCB_9BFD_0768_41E1_75E5D948A75E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -175.58,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_80887BE1_9BFD_0759_41D4_FB93DAFCAC63",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -16.35,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_8080EBF4_9BFD_073F_41E2_F21E24BC4B97",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8.59,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_80B63C09_9BFD_00E9_41D5_0010E5AE3221",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.31,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "id": "camera_80AC6C1D_9BFD_00E8_41A4_2BFBB71E440E",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -3.48,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "id": "audio_80862B50_9BC7_0778_41D4_7316AB4BCC64",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_80862B50_9BC7_0778_41D4_7316AB4BCC64.ogg",
   "mp3Url": "media/audio_80862B50_9BC7_0778_41D4_7316AB4BCC64.mp3"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "toolTipPaddingRight": 6,
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipPaddingLeft": 6,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontStyle": "normal",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "transitionMode": "blending",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowColor": "#000000",
  "progressRight": 0,
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarLeft": 0,
  "shadow": false,
  "paddingBottom": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "progressBorderRadius": 0,
  "playbackBarBorderSize": 0,
  "progressBorderSize": 0,
  "paddingTop": 0,
  "minWidth": 100,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "progressOpacity": 1,
  "class": "ViewerArea",
  "progressBarBorderRadius": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderSize": 0,
  "playbackBarHeadHeight": 15,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipPaddingBottom": 4,
  "borderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipShadowOpacity": 1,
  "width": "100%",
  "toolTipOpacity": 1,
  "height": "100%",
  "toolTipShadowSpread": 0,
  "borderRadius": 0,
  "minHeight": 50,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBarOpacity": 1,
  "progressLeft": 0,
  "playbackBarHeight": 10,
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "progressBottom": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarHeadWidth": 6,
  "top": 0,
  "playbackBarHeadShadow": true,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarBackgroundOpacity": 1,
  "id": "MainViewer",
  "toolTipBorderSize": 1,
  "toolTipBorderRadius": 3,
  "toolTipFontColor": "#606060",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBorderColor": "#000000",
  "progressHeight": 10,
  "toolTipPaddingTop": 4,
  "toolTipShadowColor": "#333333",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipFontWeight": "normal",
  "playbackBarOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "left": 0,
  "playbackBarRight": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontFamily": "Arial",
  "playbackBarHeadOpacity": 1
 },
 {
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "backgroundColorDirection": "vertical",
  "children": [
   {
    "class": "Container",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "paddingRight": 0,
    "borderSize": 0,
    "backgroundColorDirection": "vertical",
    "children": [
     {
      "class": "WebFrame",
      "paddingLeft": 0,
      "paddingRight": 0,
      "scrollEnabled": true,
      "borderSize": 0,
      "backgroundColorDirection": "vertical",
      "width": "99.873%",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "height": "100%",
      "borderRadius": 0,
      "url": "https://sketchfab.com/models/a2b1588756994e33bc46eb32d6caaf73/embed",
      "minHeight": 1,
      "top": "0%",
      "shadow": false,
      "paddingBottom": 0,
      "id": "WebFrame_9BA66844_906A_2061_41C2_C0313C07A6F2",
      "backgroundOpacity": 1,
      "backgroundColorRatios": [
       0
      ],
      "paddingTop": 0,
      "minWidth": 1,
      "left": "0%",
      "insetBorder": false
     }
    ],
    "width": "71.563%",
    "backgroundColor": [
     "#FFFFFF",
     "#FFFFFF"
    ],
    "height": "77.632%",
    "borderRadius": 0,
    "minHeight": 1,
    "scrollBarMargin": 2,
    "gap": 10,
    "scrollBarWidth": 10,
    "verticalAlign": "top",
    "horizontalAlign": "left",
    "contentOpaque": false,
    "shadow": false,
    "paddingBottom": 0,
    "bottom": "11.02%",
    "id": "Container_9D38DE1F_906A_E3E0_41DC_6DF5B4C0F3B0",
    "backgroundOpacity": 1,
    "backgroundColorRatios": [
     0,
     1
    ],
    "scrollBarColor": "#000000",
    "paddingTop": 0,
    "minWidth": 1,
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "layout": "absolute",
    "right": "13.95%"
   }
  ],
  "width": "100%",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "height": "100%",
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "gap": 10,
  "scrollBarWidth": 10,
  "verticalAlign": "top",
  "horizontalAlign": "left",
  "contentOpaque": false,
  "top": "0%",
  "visible": false,
  "shadow": false,
  "paddingBottom": 0,
  "id": "Container_9D9B077E_9076_2021_41CC_D28EC763E3D2",
  "backgroundOpacity": 0.16,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "overflow": "scroll",
  "scrollBarVisible": "rollOver",
  "left": "0%",
  "layout": "absolute"
 },
 {
  "class": "Container",
  "scrollBarOpacity": 0.5,
  "maxHeight": 500,
  "paddingLeft": 0,
  "paddingRight": 0,
  "borderSize": 0,
  "backgroundColorDirection": "vertical",
  "children": [
   {
    "class": "DropDown",
    "paddingLeft": 5,
    "paddingRight": 5,
    "fontSize": 14,
    "borderSize": 0,
    "backgroundColorDirection": "vertical",
    "arrowBeforeLabel": false,
    "popUpBackgroundOpacity": 0.84,
    "backgroundColor": [
     "#333333",
     "#000000"
    ],
    "popUpShadowBlurRadius": 6,
    "borderRadius": 4,
    "fontFamily": "Arial",
    "minHeight": 20,
    "gap": 0,
    "textDecoration": "none",
    "popUpShadowOpacity": 0,
    "fontColor": "#FFFFFF",
    "arrowColor": "#FFFFFF",
    "width": "100%",
    "fontWeight": "normal",
    "top": "0.87%",
    "popUpBackgroundColor": "#999999",
    "shadow": false,
    "popUpShadow": false,
    "paddingBottom": 0,
    "selectedPopUpFontColor": "#FFFFFF",
    "id": "DropDown_9EC8557E_9056_2021_41D3_6B0025F01655",
    "backgroundOpacity": 0.84,
    "playList": "this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist",
    "backgroundColorRatios": [
     0,
     1
    ],
    "rollOverPopUpBackgroundColor": "#FFFFFF",
    "paddingTop": 0,
    "minWidth": 100,
    "fontStyle": "normal",
    "selectedPopUpBackgroundColor": "#333333",
    "popUpBorderRadius": 0,
    "left": "0%",
    "popUpShadowColor": "#000000",
    "height": "10%",
    "popUpShadowSpread": 1,
    "popUpFontColor": "#000000"
   },
   "this.MapViewer"
  ],
  "width": "10%",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "height": "50%",
  "borderRadius": 0,
  "minHeight": 1,
  "scrollBarMargin": 2,
  "gap": 2,
  "scrollBarWidth": 10,
  "verticalAlign": "middle",
  "horizontalAlign": "left",
  "contentOpaque": false,
  "top": "1.64%",
  "shadow": false,
  "paddingBottom": 0,
  "id": "Container_9EE52C46_906A_2061_41AD_F1522FBDFB45",
  "backgroundOpacity": 0.3,
  "backgroundColorRatios": [
   0,
   1
  ],
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "overflow": "visible",
  "scrollBarVisible": "rollOver",
  "layout": "absolute",
  "right": "0.54%"
 },
 {
  "class": "IconButton",
  "maxHeight": 26,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "mode": "push",
  "borderSize": 0,
  "width": 38,
  "height": 26,
  "iconURL": "skin/IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4.png",
  "borderRadius": 0,
  "minHeight": 1,
  "horizontalAlign": "center",
  "bottom": "28.95%",
  "shadow": false,
  "cursor": "hand",
  "paddingBottom": 0,
  "id": "IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4",
  "backgroundOpacity": 0,
  "maxWidth": 38,
  "paddingTop": 0,
  "minWidth": 1,
  "transparencyActive": false,
  "right": "1%"
 },
 {
  "class": "IconButton",
  "maxHeight": 128,
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "toolTipPaddingBottom": 4,
  "mode": "toggle",
  "borderSize": 0,
  "width": 47,
  "toolTipPaddingLeft": 6,
  "height": 35,
  "toolTipShadowOpacity": 1,
  "iconURL": "skin/IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E.png",
  "toolTip": "Pantalla completa",
  "toolTipFontStyle": "normal",
  "toolTipShadowSpread": 0,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "minHeight": 1,
  "toolTipBackgroundColor": "#F6F6F6",
  "horizontalAlign": "center",
  "toolTipFontSize": 12,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "bottom": "8.55%",
  "toolTipBorderSize": 1,
  "shadow": false,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "id": "IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E",
  "backgroundOpacity": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowColor": "#333333",
  "maxWidth": 128,
  "toolTipFontWeight": "normal",
  "paddingTop": 0,
  "minWidth": 1,
  "toolTipTextShadowOpacity": 0,
  "transparencyActive": true,
  "toolTipPaddingTop": 4,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "right": "1%",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingRight": 6
 },
 {
  "verticalAlign": "top",
  "paddingLeft": 20,
  "paddingRight": 20,
  "itemPaddingTop": 3,
  "itemLabelFontFamily": "Arial",
  "borderSize": 0,
  "selectedItemLabelFontColor": "#FFCC00",
  "rollOverItemBackgroundOpacity": 0,
  "itemThumbnailScaleMode": "fit_outside",
  "height": 133,
  "itemVerticalAlign": "middle",
  "width": "87.138%",
  "scrollBarWidth": 10,
  "gap": 13,
  "itemLabelPosition": "bottom",
  "borderRadius": 5,
  "itemLabelGap": 8,
  "itemPaddingBottom": 3,
  "minHeight": 20,
  "scrollBarMargin": 2,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingRight": 3,
  "itemThumbnailShadow": true,
  "itemLabelFontWeight": "normal",
  "itemPaddingLeft": 3,
  "itemBorderRadius": 0,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemThumbnailShadowBlurRadius": 8,
  "horizontalAlign": "left",
  "itemBackgroundOpacity": 0,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontStyle": "normal",
  "selectedItemLabelFontWeight": "bold",
  "rollOverItemLabelFontWeight": "bold",
  "itemThumbnailShadowVerticalLength": 3,
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailWidth": 75,
  "bottom": "0%",
  "itemLabelFontSize": 14,
  "shadow": false,
  "paddingBottom": 10,
  "itemThumbnailShadowOpacity": 0.54,
  "itemHorizontalAlign": "center",
  "id": "ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41",
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailOpacity": 1,
  "backgroundOpacity": 0,
  "itemThumbnailHeight": 75,
  "itemThumbnailBorderRadius": 14,
  "playList": "this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist",
  "itemBackgroundColor": [],
  "scrollBarVisible": "rollOver",
  "paddingTop": 10,
  "layout": "horizontal",
  "itemMode": "normal",
  "itemLabelFontColor": "#FFFFFF",
  "minWidth": 20,
  "left": "0.72%",
  "itemLabelTextDecoration": "none",
  "class": "ThumbnailList",
  "scrollBarOpacity": 0.5,
  "itemBackgroundColorRatios": [],
  "itemOpacity": 1
 },
 {
  "class": "IconButton",
  "paddingLeft": 0,
  "verticalAlign": "middle",
  "paddingRight": 0,
  "toolTipPaddingBottom": 4,
  "mode": "toggle",
  "borderSize": 0,
  "width": 40,
  "toolTipPaddingLeft": 6,
  "height": 40,
  "toolTipShadowOpacity": 1,
  "iconURL": "skin/IconButton_80DFAE69_9BC5_0129_41CF_7754C09CEA40.png",
  "toolTip": "mute",
  "toolTipFontStyle": "normal",
  "toolTipShadowSpread": 0,
  "borderRadius": 0,
  "toolTipOpacity": 1,
  "minHeight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "horizontalAlign": "center",
  "toolTipFontSize": 12,
  "toolTipShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "shadow": false,
  "toolTipBorderRadius": 3,
  "toolTipShadowVerticalLength": 0,
  "cursor": "hand",
  "paddingBottom": 0,
  "bottom": "8.39%",
  "id": "IconButton_80DFAE69_9BC5_0129_41CF_7754C09CEA40",
  "backgroundOpacity": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowColor": "#333333",
  "toolTipFontWeight": "normal",
  "paddingTop": 0,
  "minWidth": 0,
  "toolTipTextShadowOpacity": 0,
  "transparencyActive": true,
  "toolTipPaddingTop": 4,
  "toolTipBorderColor": "#767676",
  "toolTipFontFamily": "Arial",
  "pressedIconURL": "skin/IconButton_80DFAE69_9BC5_0129_41CF_7754C09CEA40_pressed.png",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipPaddingRight": 6,
  "right": "7.25%"
 }
], 
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "paddingRight": 0,
 "buttonToggleFullscreen": "this.IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E",
 "borderSize": 0,
 "contentOpaque": false,
 "width": "100%",
 "height": "100%",
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "gap": 10,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "shadow": false,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "minWidth": 20,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "start": "this.playAudioList([this.audio_80862B50_9BC7_0778_41D4_7316AB4BCC64]); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_9F01F4B2_90B5_E020_41DD_F2D482D46FF4], 'cardboardAvailable'); this.syncPlaylists([this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist,this.ThumbnailList_94C28DEF_994D_DBD3_41D9_C1DFD56D0C41_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.DropDown_9EC8557E_9056_2021_41D3_6B0025F01655_playlist.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_894373DD_907F_E063_41DD_B2AFC87CD60E].forEach(function(component) { component.set('visible', false); }) }",
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_80DFAE69_9BC5_0129_41CF_7754C09CEA40",
 "mouseWheelEnabled": true,
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "existsKey": function(key){  return key in window; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 }
})