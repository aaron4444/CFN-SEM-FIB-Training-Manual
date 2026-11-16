window.TRAINING_CONTENT = {
 "title": "Crossbeam 350 Quick Guide",
 "subtitle": "Zeiss Crossbeam · SmartSEM · SmartFIB · OmniProbe",
 "version": "V2 draft",
 "quick": [
  {
   "label": "Stage tilt / rotate",
   "ch": "f-sem",
   "step": "loc-stage-tr"
  },
  {
   "label": "EHT on",
   "ch": "f-sem",
   "step": "loc-tabs"
  },
  {
   "label": "Switch to FIB (F8)",
   "ch": "f-sem",
   "step": "loc-view-select"
  },
  {
   "label": "Sample exchange",
   "ch": "p-exchange"
  },
  {
   "label": "Outgas GIS",
   "ch": "p-gas"
  },
  {
   "label": "Insert OmniProbe",
   "ch": "l-4",
   "step": "l4-2"
  },
  {
   "label": "Touch alarm",
   "ch": "f-mid",
   "step": "loc-touch"
  },
  {
   "label": "Liftout overview",
   "ch": "l-0"
  }
 ],
 "groups": [
  "Procedures",
  "Liftout",
  "Cylinder liftout",
  "Find it"
 ],
 "chapters": [
  {
   "id": "p-exchange",
   "group": "Procedures",
   "title": "Sample exchange",
   "summary": "Unload a sample, or vent and load a new one.",
   "steps": [
    {
     "id": "ex-1",
     "text": "**If Sample is in the chamber:** press `Exchange`. The stage comes down to the exchange position and the interlock door opens.",
     "where": "Keyboard panel · SmartSEM toolbar",
     "media": [
      {
       "type": "image",
       "src": "img/exchange-keyboard.jpg",
       "w": 1536,
       "h": 2040,
       "alt": "Exchange key on the keyboard panel",
       "marks": [
        {
         "k": "ring",
         "x": 0.4669,
         "y": 0.4815,
         "label": "Exchange"
        }
       ]
      },
      {
       "type": "video",
       "src": "clips/p-exchange-ex-1-mvs70tmq.webm",
       "w": 1920,
       "h": 1080,
       "dur": 17.97,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 17.07
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "ex-2",
     "text": "**Sample not loaded:** press `Vent` on the Airlock panel.",
     "where": "Airlock panel",
     "media": [
      {
       "type": "image",
       "src": "img/airlock-vent.png",
       "w": 217,
       "h": 527
      }
     ]
    },
    {
     "id": "ex-3",
     "text": "Load the chamber with the **default holder**.",
     "media": [
      {
       "type": "image",
       "src": "img/default-holder.png",
       "w": 213,
       "h": 161
      }
     ]
    },
    {
     "id": "ex-4",
     "text": "Press the **NavCam** button *before* closing the door, then push the door closed so it is **flush with the wall**.",
     "warn": "The door must sit flush before you press Transfer.",
     "media": [
      {
       "type": "image",
       "src": "img/loadlock-hw-mvs76htp.jpg",
       "marks": [
        {
         "k": "box",
         "label": "NavCam Button",
         "x": 0.4031,
         "y": 0.1391,
         "w": 0.208,
         "h": 0.2684
        },
        {
         "k": "box",
         "label": "Make sure you took the picture while the door is open! not closed like this",
         "x": 0.2329,
         "y": 0.5256,
         "w": 0.344,
         "h": 0.156
        }
       ],
       "w": 453,
       "h": 381
      }
     ]
    },
    {
     "id": "ex-5",
     "text": "Press `Transfer`. The chamber pumps down and the load-lock door opens.",
     "where": "Airlock panel",
     "media": [
      {
       "type": "image",
       "src": "img/airlock-transfer.png",
       "w": 197,
       "h": 493
      }
     ]
    },
    {
     "id": "ex-6",
     "text": "Insert the sample with the rod,  unscrew and **retract the rod**, then press `Store`.",
     "media": [
      {
       "type": "image",
       "src": "img/loadlock-photos.png",
       "w": 232,
       "h": 436
      },
      {
       "type": "image",
       "src": "img/airlock-store-mvs7a1jg.png",
       "marks": [
        {
         "k": "box",
         "label": "Store",
         "x": 0.1548,
         "y": 0.2244,
         "w": 0.3392,
         "h": 0.1516
        }
       ],
       "w": 221,
       "h": 553,
       "crop": {
        "x": 0.052,
        "y": 0.017,
        "w": 0.8913,
        "h": 0.5791
       }
      }
     ]
    },
    {
     "id": "ex-7",
     "text": "Press `Resume` on the keyboard and continue with SEM start-up.",
     "where": "Keyboard panel",
     "media": [
      {
       "type": "image",
       "src": "img/keyboard-camera.jpg",
       "w": 699,
       "h": 527,
       "marks": [
        {
         "k": "ring",
         "x": 0.6082,
         "y": 0.4123,
         "label": "Resume"
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "load",
    "unload",
    "vent",
    "transfer",
    "store",
    "airlock",
    "holder"
   ]
  },
  {
   "id": "p-sem",
   "group": "Procedures",
   "title": "SEM start-up",
   "summary": "Beam on, find the sample, set height and WD.",
   "steps": [
    {
     "id": "sem-1",
     "text": "Press `Resume` on the keyboard to open the column valve, then click `EHT On` in the top-left panel.",
     "where": "Keyboard panel · SmartSEM top-left panel",
     "tags": [
      "EHT",
      "beam",
      "column valve"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/exchange-keyboard-mvs7l0ld.jpg",
       "marks": [
        {
         "k": "ring",
         "x": 0.5638,
         "y": 0.4913,
         "label": "Resume"
        }
       ],
       "w": 1536,
       "h": 2040
      },
      {
       "type": "video",
       "src": "clips/p-sem-sem-1-mvs7ns1i.webm",
       "w": 1920,
       "h": 1080,
       "dur": 31.25,
       "pointer": "arrow",
       "trim": {
        "start": 0,
        "end": 30.35
       },
       "cursor": [
        {
         "t": 2.68,
         "x": 0.9226,
         "y": 0.1366,
         "c": 1
        },
        {
         "t": 12.8,
         "x": 0.0431,
         "y": 0.1954,
         "c": 1
        },
        {
         "t": 27.92,
         "x": 0.432,
         "y": 0.8048,
         "c": 1
        },
        {
         "t": 28.63,
         "x": 0.7654,
         "y": 0.9729,
         "c": 0
        }
       ],
       "marks": []
      }
     ]
    },
    {
     "id": "sem-2",
     "text": "**Double-click** a sample in `Image Navigation`.",
     "where": "SmartSEM › Stage Navigation Bar",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.5833,
         "w": 0.145,
         "h": 0.1602,
         "label": "Double-click the sample"
        }
       ],
       "crop": {
        "x": 0.2551,
        "y": 0.5036,
        "w": 0.319,
        "h": 0.3196
       }
      },
      {
       "type": "video",
       "src": "clips/p-sem-sem-2-mvs7tfna.webm",
       "w": 1920,
       "h": 1080,
       "dur": 15.9,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 15
       },
       "cursor": [
        {
         "t": 4.05,
         "x": 0.841,
         "y": 0.3614,
         "c": 1
        }
       ],
       "marks": [],
       "crop": {
        "x": 0.1424,
        "y": 0.0231,
        "w": 0.8576,
        "h": 0.8385
       }
      }
     ]
    },
    {
     "id": "sem-3",
     "text": "Raise the stage to the crosshair. **FIB users:** additionally set **M = 8.1 mm**.",
     "where": "Stage tab",
     "tags": [
      "M axis",
      "crosshair"
     ],
     "media": [
      {
       "type": "video",
       "src": "clips/p-sem-sem-3-mvs7vw8i.webm",
       "w": 1920,
       "h": 1080,
       "dur": 29.98,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 9.9
       },
       "cursor": [],
       "marks": [],
       "crop": {
        "x": 0,
        "y": 0,
        "w": 0.6921,
        "h": 0.9918
       }
      },
      {
       "type": "image",
       "src": "img/sem-stage-tab-mvs7xb7e.png",
       "marks": [
        {
         "k": "box",
         "label": "M axis for Samples on 0.5mm Silicon",
         "x": 0.0544,
         "y": 0.357,
         "w": 0.8889,
         "h": 0.0511
        }
       ],
       "w": 291,
       "h": 714
      }
     ]
    },
    {
     "id": "sem-4",
     "text": "Press the **Camera** button on the SEM keyboard panel. Or Change the Detector to SE2",
     "media": [
      {
       "type": "image",
       "src": "img/keyboard-camera.jpg",
       "w": 699,
       "h": 527,
       "marks": [
        {
         "k": "ring",
         "x": 0.7453,
         "y": 0.4374,
         "label": "Camera Button"
        }
       ]
      },
      {
       "type": "video",
       "src": "clips/p-sem-sem-4-mvs7zvyd.webm",
       "w": 1920,
       "h": 1080,
       "dur": 27.57,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 26.67
       },
       "cursor": [
        {
         "t": 1.15,
         "x": 0.516,
         "y": 0.8027,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "SE2",
         "x": 0.4167,
         "y": 0.788,
         "w": 0.0638,
         "h": 0.0399,
         "t0": 4.9,
         "t1": 7.9
        },
        {
         "k": "box",
         "label": "Lower Mag and Bring Focus to 10mm",
         "x": 0.2299,
         "y": 0.7565,
         "w": 0.2376,
         "h": 0.1009,
         "t0": 10.05,
         "t1": 13.05
        }
       ],
       "crop": {
        "x": 0.003,
        "y": 0.0273,
        "w": 0.695,
        "h": 0.9727
       }
      }
     ]
    },
    {
     "id": "sem-5",
     "text": "Check that **Safe Navigation** is turned on.",
     "where": "Stage tab › Options",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.7889,
         "w": 0.0343,
         "h": 0.0102,
         "label": "Safe Navigation"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.6838,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "sem-6",
     "text": "Focus on the sample, then turn on **Track Z**.",
     "where": "Stage tab › Options",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.7579,
         "w": 0.0166,
         "h": 0.0097,
         "label": "Track Z"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.6525,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "sem-7",
     "text": "Bring the sample to **WD 5.2 mm** for EDS or FIB operation (Z should be around **42**).",
     "where": "Status bar",
     "media": [
      {
       "type": "video",
       "src": "clips/p-sem-sem-7-mvs83cq5.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Pressing Z delta will move the stage relative + is UP towards to pole piece",
         "x": 0.0041,
         "y": 0.2521,
         "w": 0.0496,
         "h": 0.0609,
         "t0": 0.19,
         "t1": 3.19
        },
        {
         "k": "box",
         "label": "Watch here for the WD it will follow Z if TrackZ is turned on",
         "x": 0.3682,
         "y": 0.7712,
         "w": 0.1076,
         "h": 0.1072,
         "t0": 0.19,
         "t1": 3.19
        },
        {
         "k": "box",
         "label": "Use 2mm steps when far away and change to smaller 1 and <1mm steps as you approach the sample",
         "x": 0.003,
         "y": 0.1996,
         "w": 0.1596,
         "h": 0.1282,
         "t0": 19.49,
         "t1": 22.49
        },
        {
         "k": "box",
         "label": "Notice when you refocus you might need to bring the stage Higher still",
         "x": 0.3706,
         "y": 0.7838,
         "w": 0.0946,
         "h": 0.0925,
         "t0": 32.94,
         "t1": 35.94
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "sem",
    "start",
    "eht",
    "wd",
    "track z"
   ]
  },
  {
   "id": "p-imaging",
   "group": "Procedures",
   "title": "SEM imaging and moving about",
   "summary": "Detector choices.",
   "steps": [
    {
     "id": "im-1",
     "text": "Pick a detector: **In-lens**, **SE**, **ESB** — or load a **Recipe**.",
     "media": [
      {
       "type": "image",
       "src": "img/detectors.png",
       "w": 1306,
       "h": 965
      }
     ],
     "hint": "Add a line on when to use each detector (e.g. In-lens for … , ESB for …)."
    },
    {
     "id": "s-z9h03g",
     "text": "Auto Contrast Brightness, Often you will need to find some nominal B/C to get good imaging quality then you can use the \"Auto C/B\" button in the toolbar to optimize for the current imaging settings",
     "media": [
      {
       "type": "video",
       "src": "clips/p-imaging-s-z9h03g-mvs8bvq5.webm",
       "w": 1920,
       "h": 1080,
       "dur": 40.28,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 39.38
       },
       "cursor": [
        {
         "t": 15.8,
         "x": 0.1058,
         "y": 0.5358,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "Here the Contrast is too low",
         "x": 0.0041,
         "y": 0.4917,
         "w": 0.0875,
         "h": 0.0799,
         "t0": 15.8,
         "t1": 18.8
        },
        {
         "k": "box",
         "label": "Everything is on but we don't see anything Lets try Auto CB",
         "x": 0.367,
         "y": 0.0231,
         "w": 0.0768,
         "h": 0.1303,
         "t0": 0,
         "t1": 8.31
        },
        {
         "k": "box",
         "label": "lets raise the Contrast with the contrast knob",
         "x": 0.0065,
         "y": 0.4854,
         "w": 0.0969,
         "h": 0.1072,
         "t0": 24.92,
         "t1": 30
        }
       ]
      }
     ]
    },
    {
     "id": "s-wnkrre",
     "text": "Quick moving options1: SHIFT+Mouse Click L",
     "media": [
      {
       "type": "video",
       "src": "clips/p-imaging-s-wnkrre-mvsaa1pf.webm",
       "w": 1920,
       "h": 1080,
       "dur": 8.07,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 7.17
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Hold SHIFT and double left click to move ",
         "x": 0.4876,
         "y": 0.4623,
         "w": 0.0863,
         "h": 0.1492,
         "t0": 3.09,
         "t1": 6.09
        }
       ]
      }
     ]
    },
    {
     "id": "s-veof0e",
     "text": "Quick Moving Option 2: CTL+TAB",
     "media": [
      {
       "type": "video",
       "src": "clips/p-imaging-s-veof0e-mvsac9w3.webm",
       "w": 1920,
       "h": 1080,
       "dur": 10.04,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 9.14
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Click in the view port",
         "x": 0.38,
         "y": 0.4434,
         "w": 0.091,
         "h": 0.1345,
         "t0": 0,
         "t1": 3
        },
        {
         "k": "box",
         "label": "Ctl+Tab changes the mouse to a Green Crosshair",
         "x": 0.3812,
         "y": 0.4392,
         "w": 0.1312,
         "h": 0.124,
         "t0": 3.96,
         "t1": 6.96
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "detector",
    "in-lens",
    "se",
    "esb",
    "recipe"
   ]
  },
  {
   "id": "p-eds",
   "group": "Procedures",
   "title": "EDS (Aztec)",
   "summary": "Bring the sample to 5 mm WD, start Aztec, insert the spectrometer.",
   "steps": [
    {
     "id": "eds-1",
     "text": "Make Sure to bring the sample to **aprox WD 5 mm**.",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3426,
         "y": 0.95,
         "w": 0.1128,
         "h": 0.0139,
         "label": "WD"
        }
       ],
       "crop": {
        "x": 0.2749,
        "y": 0.7514,
        "w": 0.2482,
        "h": 0.2486
       }
      }
     ]
    },
    {
     "id": "eds-2",
     "text": "Start **Aztec** (from SmartSEM or the desktop).",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3213,
         "y": 0.5231,
         "w": 0.027,
         "h": 0.0259,
         "label": "Aztec"
        }
       ],
       "crop": {
        "x": 0.2248,
        "y": 0.4258,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "note": "Note it make have been opened behind smartSEM"
    },
    {
     "id": "s-ltw9w5",
     "text": "Open a Project Folder",
     "note": "You only need to give it your root folder, it will make a folder with the Project Name that you give it!",
     "media": [
      {
       "type": "video",
       "src": "clips/p-eds-eds-2-mvs8l5v9-mvs8mu81.webm",
       "marks": [],
       "w": 1920,
       "h": 1080,
       "cursor": [],
       "pointer": "halo"
      }
     ]
    },
    {
     "id": "eds-3",
     "text": "**Insert the EDS spectrometer.**",
     "media": [
      {
       "type": "video",
       "src": "clips/p-eds-eds-3-mvs8nk51.webm",
       "w": 1920,
       "h": 1080,
       "dur": 11.95,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 11.05
       },
       "cursor": [
        {
         "t": 0.54,
         "x": 0.9048,
         "y": 0.9834,
         "c": 1
        },
        {
         "t": 2.38,
         "x": 0.7996,
         "y": 0.8805,
         "c": 1
        },
        {
         "t": 3.03,
         "x": 0.8694,
         "y": 0.9288,
         "c": 1
        }
       ],
       "marks": []
      }
     ]
    },
    {
     "id": "eds-4",
     "text": "Turn off the SmartSEM cameras by toggling to a different view.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-eds-eds-4-mvs8pnff.webm",
       "w": 1920,
       "h": 1080,
       "dur": 5.12,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 4.22
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "the light from the chamber scope is overwhelming the detector deadtime, lets turn it off by switching to another view",
         "x": 0.6483,
         "y": 0.5127,
         "w": 0.3369,
         "h": 0.4182,
         "t0": 0,
         "t1": 3
        }
       ]
      }
     ]
    },
    {
     "id": "s-zr6fdg",
     "text": "Take a map!  First take a scan image, then take a map.",
     "note": "You can change the default settings for each acquisition in the Settings cog",
     "media": [
      {
       "type": "video",
       "src": "clips/p-eds-s-zr6fdg-mvs8tawy.webm",
       "w": 1920,
       "h": 1080,
       "dur": 31.11,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 30.21
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "s-qucm6q",
     "text": "Well that was silly we didnt change the KeV to excite anything. lets up the Current and Voltage and try again",
     "note": "you need double the kev in the K or L edge! Hint look at the Mouse pad, or Click and Element in the Aztec pTable to check what that is.",
     "media": [
      {
       "type": "image",
       "src": "img/beam-settings-mvs8wps1.png",
       "marks": [],
       "w": 280,
       "h": 206
      },
      {
       "type": "video",
       "src": "clips/p-eds-s-qucm6q-mvs8yvak.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "eds-5",
     "text": "When finished: **retract the spectrometer** and close the software.",
     "warn": "Always retract the detector before moving the stage.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-eds-eds-5-mvs8zuhe.webm",
       "w": 1920,
       "h": 1080,
       "dur": 23.91,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 23.01
       },
       "cursor": [],
       "marks": [
        {
         "k": "ring",
         "x": 0.8978,
         "y": 0.9792,
         "label": "",
         "t0": 0,
         "t1": 2
        },
        {
         "k": "ring",
         "x": 0.9072,
         "y": 0.933,
         "label": "retract",
         "t0": 2.26,
         "t1": 5.26
        },
        {
         "k": "box",
         "label": "Wait until it is all the way out before closing the software",
         "x": 0.8091,
         "y": 0.8153,
         "w": 0.1773,
         "h": 0.1387,
         "t0": 5,
         "t1": 23.86
        }
       ],
       "crop": {
        "x": 0.6093,
        "y": 0.622,
        "w": 0.3907,
        "h": 0.378
       }
      }
     ]
    }
   ],
   "tags": [
    "eds",
    "aztec",
    "spectrometer"
   ]
  },
  {
   "id": "p-fibprep",
   "group": "Procedures",
   "title": "FIB preparation",
   "summary": "Log in, FIB on, eucentric height and coincidence at 54°.",
   "steps": [
    {
     "id": "fp-1",
     "text": "Log in — user **FIB user**, password **FIB user**.",
     "tags": [
      "login",
      "password"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/fib-user-mvs93spi.png",
       "marks": [
        {
         "k": "box",
         "label": "",
         "x": 0.3481,
         "y": 0.03,
         "w": 0.2849,
         "h": 0.1906
        }
       ],
       "w": 241,
       "h": 133
      },
      {
       "type": "image",
       "src": "img/login-info-mvs95lnj.png",
       "marks": [],
       "w": 386,
       "h": 230
      }
     ]
    },
    {
     "id": "fp-2",
     "text": "Turn on the FIB, open the column valve, and make sure the probe is the **50 pA reference**.",
     "where": "SmartFIB › Image Capture › Probe",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibprep-fp-2-mvs9c5hs.webm",
       "w": 1920,
       "h": 1080,
       "dur": 19.43,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 18.53
       },
       "cursor": [
        {
         "t": 1.7,
         "x": 0.802,
         "y": 0.0672,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "",
         "x": 0.724,
         "y": 0.2332,
         "w": 0.1395,
         "h": 0.1009,
         "t0": 1.7,
         "t1": 4.7
        },
        {
         "k": "box",
         "label": "reset to 50pA ref",
         "x": 0.8115,
         "y": 0.456,
         "w": 0.1017,
         "h": 0.3993,
         "t0": 7.2,
         "t1": 10.2
        },
        {
         "k": "box",
         "label": "open column valve",
         "x": 0.7181,
         "y": 0.3488,
         "w": 0.0674,
         "h": 0.0714,
         "t0": 13.12,
         "t1": 16.12
        }
       ]
      }
     ],
     "note": "Please note that the Column Valve won't open until the System vacuum is <1e-5 mbar"
    },
    {
     "id": "fp-3",
     "text": "Standard 0.5 mm silicon wafer: bring **M to 8.1 mm** (TEM holder: **4.77**).",
     "where": "Stage tab",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6824,
         "w": 0.0655,
         "h": 0.0102,
         "label": "M"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5773,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "fp-4",
     "text": "Bring the sample to about **5.3 mm WD**.",
     "where": "Status bar",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3426,
         "y": 0.95,
         "w": 0.1128,
         "h": 0.0139,
         "label": "WD"
        }
       ],
       "crop": {
        "x": 0.2749,
        "y": 0.7514,
        "w": 0.2482,
        "h": 0.2486
       }
      }
     ]
    },
    {
     "id": "fp-6",
     "text": "**Eucentric — manual:** reset **Rotation to 0**. Tilt **5°, 10°, 20°, then 54°**, re-centering the sample with **M** at each increment.",
     "where": "Stage tab",
     "note": "Moving M changes the WD. ZEISS manual §6.4.1 notes WD should be ≥ 10 mm when first setting eucentricity; the steps here follow the lab’s incremental-tilt method. 54° gives perpendicular ion-beam incidence.",
     "tags": [
      "eucentric",
      "tilt",
      "54",
      "M"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6509,
         "w": 0.0655,
         "h": 0.0417,
         "label": "T, R, M"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5615,
        "w": 0.22,
        "h": 0.2204
       }
      },
      {
       "type": "video",
       "src": "clips/p-fibprep-fp-6-mvs9iwz8.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Set tilt sequentially 0, 10, 20, 54 at each step we will adjust M to bring to the center of the FOV",
         "x": 0.0053,
         "y": 0.29,
         "w": 0.1442,
         "h": 0.0567,
         "t0": 2.7,
         "t1": 5.7
        },
        {
         "k": "box",
         "label": "i'm using the M button on the console you can see the value change here",
         "x": 0.0053,
         "y": 0.3572,
         "w": 0.1395,
         "h": 0.0462,
         "t0": 16.4,
         "t1": 19.4
        },
        {
         "k": "box",
         "label": "it can be helpful to look at the sample in the chamber view",
         "x": 0.6791,
         "y": 0.5505,
         "w": 0.2518,
         "h": 0.332,
         "t0": 28.16,
         "t1": 31.16
        }
       ]
      }
     ]
    },
    {
     "id": "fp-5",
     "text": "**Eucentric / coincidence — semi-automated:** follow the *FIB Daily Adjust* wizard.",
     "note": "ZEISS SmartSEM manual §6.1.2 (*Adjusting the Tilt Eucentricity via the FIB Daily Adjust Wizard*).",
     "tags": [
      "eucentric",
      "coincidence",
      "daily adjust",
      "wizard"
     ]
    },
    {
     "id": "fp-7",
     "text": "On the **FIB** tab, **open** the gun valve.",
     "where": "SmartSEM control panel › Gun / FIB",
     "media": [
      {
       "type": "image",
       "src": "img/fib-panel-mvs9og71.png",
       "marks": [
        {
         "k": "box",
         "label": "check that the valve is open",
         "x": 0.0626,
         "y": 0.3528,
         "w": 0.5142,
         "h": 0.0938
        }
       ],
       "w": 391,
       "h": 596
      }
     ]
    },
    {
     "id": "fp-8",
     "text": "Switch to FIB with **F8**.",
     "where": "View selector",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4419,
         "y": 0.5259,
         "w": 0.0343,
         "h": 0.013,
         "label": "F8 = Switch between FIB and SEM view"
        }
       ],
       "crop": {
        "x": 0.3491,
        "y": 0.4222,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "fp-9",
     "text": "Find the sample and bring it to the centre of the field of view using **Z** (this sets **coincidence**). If 54° makes it too hard to find a landmark, try again at **20°**.",
     "tags": [
      "coincidence",
      "z"
     ],
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibprep-fp-9-mvs9qq9y.webm",
       "w": 1920,
       "h": 1080,
       "dur": 27.45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 26.55
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "we used F8 to switch to the FIB view",
         "x": 0.8469,
         "y": 0.0294,
         "w": 0.1158,
         "h": 0.0735,
         "t0": 3.71,
         "t1": 6.71
        },
        {
         "k": "box",
         "label": "looks like we need to bring the sample to the center with Z",
         "x": 0.3753,
         "y": 0.4181,
         "w": 0.0887,
         "h": 0.3635,
         "t0": 5.58,
         "t1": 8.58
        },
        {
         "k": "box",
         "label": "Z ",
         "x": 0.0089,
         "y": 0.25,
         "w": 0.1348,
         "h": 0.0757,
         "t0": 11.69,
         "t1": 14.69
        }
       ]
      }
     ]
    },
    {
     "id": "fp-10",
     "text": "Centre the feature in the **FIB** view. Fix any leftover offset in the SEM view with **SEM beam shift**.",
     "note": "SEM beam shift is larger than FIB (≈100 µm of shift in the SEM equals ≈25 µm in the FIB), so stage-centre in the FIB and adjust the SEM with beam shift.",
     "tags": [
      "beam shift"
     ]
    }
   ],
   "tags": [
    "fib",
    "eucentric",
    "coincidence",
    "54",
    "login"
   ]
  },
  {
   "id": "p-fibimg",
   "group": "Procedures",
   "title": "FIB imaging",
   "summary": "Open SmartFIB and pick a scan speed.",
   "steps": [
    {
     "id": "fi-1",
     "text": "Open **SmartFIB** from the top-right of SmartSEM.",
     "where": "SmartSEM › top-right icons",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4097,
         "y": 0.5222,
         "w": 0.0114,
         "h": 0.0194,
         "label": "SmartFIB"
        }
       ],
       "crop": {
        "x": 0.3054,
        "y": 0.4217,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "fi-2",
     "text": "Scan speed: **1** fast live scan · **2** medium (freezes at end of frame) · **3** slow (freezes at end of frame).",
     "where": "SmartFIB › toolbar",
     "note": "Use **2** before patterning.",
     "media": [
      {
       "type": "image",
       "src": "img/fib-scan-buttons.png",
       "w": 660,
       "h": 56
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5528,
         "y": 0.5241,
         "w": 0.033,
         "h": 0.0185,
         "label": "1 · 2 · 3"
        }
       ],
       "crop": {
        "x": 0.4593,
        "y": 0.4231,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    }
   ],
   "tags": [
    "fib",
    "imaging",
    "scan"
   ]
  },
  {
   "id": "p-fibalign",
   "group": "Procedures",
   "title": "FIB alignment - (Advanced Operation)",
   "summary": "FIB Control › Align tab.",
   "steps": [
    {
     "id": "fa-1",
     "text": "FIB Align FIB probe Registration",
     "where": "Here we will try to align the various FIB settings so they have minimal shift between settings",
     "hint": "Clip idea: the full FIB alignment run (aperture, beam shift, stigmation) with the cursor highlighted.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibalign-fa-1-mvsc9ohh.webm",
       "w": 1920,
       "h": 1080,
       "dur": 36.66,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 35.76
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "make an annotation marker and set it to transparent",
         "x": 0.3097,
         "y": 0.435,
         "w": 0.227,
         "h": 0.1702,
         "t0": 0,
         "t1": 1.5
        },
        {
         "k": "box",
         "label": "chose the desired FIB probe",
         "x": 0.6844,
         "y": 0.2059,
         "w": 0.1359,
         "h": 0.3888,
         "t0": 1.71,
         "t1": 4.71
        },
        {
         "k": "box",
         "label": "adjust the Beam Shift Cor. to bring your feature back to marker",
         "x": 0.7021,
         "y": 0.5169,
         "w": 0.1998,
         "h": 0.2164,
         "t0": 6.8,
         "t1": 9.8
        },
        {
         "k": "box",
         "label": "Press \"Save\"",
         "x": 0.6962,
         "y": 0.2122,
         "w": 0.1809,
         "h": 0.1093,
         "t0": 24.11,
         "t1": 27.11
        },
        {
         "k": "box",
         "label": "now going back and forth yields registration",
         "x": 0.3156,
         "y": 0.3929,
         "w": 0.2518,
         "h": 0.2396,
         "t0": 26.59,
         "t1": 36
        }
       ]
      }
     ]
    },
    {
     "id": "s-ftpg5s",
     "text": "FIB align FIB Probe FOCUS and STIG",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibalign-s-ftpg5s-mvscghmb.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "adjust FOCUS and STIG to desired resolution...then press Save",
         "x": 0.263,
         "y": 0.3278,
         "w": 0.3783,
         "h": 0.4434,
         "t0": 0,
         "t1": 9.48
        },
        {
         "k": "box",
         "label": "Press Save",
         "x": 0.7252,
         "y": 0.1807,
         "w": 0.169,
         "h": 0.1597,
         "t0": 25.78,
         "t1": 27
        },
        {
         "k": "box",
         "label": "you can then step through each setting and save focus/stig",
         "x": 0.6483,
         "y": 0.1996,
         "w": 0.2494,
         "h": 0.269,
         "t0": 34.12,
         "t1": 37.12
        }
       ]
      }
     ]
    },
    {
     "id": "s-s4lnap",
     "text": "FIB Align - Aperture using Wobble Focus",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibalign-s-s4lnap-mvscoob9.webm",
       "w": 1920,
       "h": 1080,
       "dur": 38.63,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 37.73
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Turn on Wobble from either the Console or the Align tab pulldown",
         "x": 0.6944,
         "y": 0.5484,
         "w": 0.1217,
         "h": 0.1282,
         "t0": 2.08,
         "t1": 5.08
        },
        {
         "k": "box",
         "label": "Typically shifts are in a diagonal axis, this LEFT/RIGHT shows that both axis need adjustment",
         "x": 0.2713,
         "y": 0.4181,
         "w": 0.2979,
         "h": 0.1723,
         "t0": 10.99,
         "t1": 13.99
        },
        {
         "k": "box",
         "label": "Coarse Steps are on the outside and FINE steps are on the inside.",
         "x": 0.6862,
         "y": 0.4055,
         "w": 0.1229,
         "h": 0.1408,
         "t0": 17.58,
         "t1": 20.58
        },
        {
         "k": "box",
         "label": "Once Done Press Save",
         "x": 0.7027,
         "y": 0.1933,
         "w": 0.1489,
         "h": 0.103,
         "t0": 30.29,
         "t1": 33.29
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "align",
    "alignment",
    "beam shift",
    "stigmation"
   ]
  },
  {
   "id": "p-fibmill",
   "group": "Procedures",
   "title": "FIB milling and patterning",
   "summary": "Draw a pattern, choose the recipe, run it.",
   "steps": [
    {
     "id": "fm-1",
     "text": "Make sure **eucentric** and **coincidence** are set and you have a slow-scan (2 or 3 scan) FIB image.",
     "note": "See *FIB preparation* and *FIB imaging*."
    },
    {
     "id": "s-19nzwm",
     "text": "Cut a Box Video. Draw a shape, then set attribute, Expose and Start",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibmill-s-19nzwm-mvsb02a3.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [
        {
         "t": 8.83,
         "x": 0.6543,
         "y": 0.1933,
         "c": 1
        },
        {
         "t": 12.92,
         "x": 0.2145,
         "y": 0.0672,
         "c": 1
        },
        {
         "t": 14.18,
         "x": 0.6838,
         "y": 0.3089,
         "c": 1
        },
        {
         "t": 14.79,
         "x": 0.5668,
         "y": 0.5547,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "Collect a new Frame",
         "x": 0.133,
         "y": 0.0294,
         "w": 0.0757,
         "h": 0.0904,
         "t0": 0.89,
         "t1": 3.89
        },
        {
         "k": "box",
         "label": "Choose a Pattern and create in the window",
         "x": 0.0018,
         "y": 0.5842,
         "w": 0.0579,
         "h": 0.2396,
         "t0": 4.47,
         "t1": 6
        },
        {
         "k": "box",
         "label": "Define your Operation, here we will do a Cross section",
         "x": 0.6294,
         "y": 0.2332,
         "w": 0.3132,
         "h": 0.1555,
         "t0": 9.77,
         "t1": 12.77
        }
       ]
      }
     ],
     "note": "BEFORE Pt or Carbon Depo you MUST do GIS Outgassing"
    },
    {
     "id": "s-9a466c",
     "text": "Follow GIS outgassing BEFORE doing any of the following steps, for More see 'FIB Pt and Carbon Deposition'",
     "media": [
      {
       "type": "image",
       "src": "img/fib-material-options-mvscwazw.png",
       "marks": [
        {
         "k": "box",
         "label": "",
         "x": 0.2122,
         "y": 0.5044,
         "w": 0.3889,
         "h": 0.1697
        },
        {
         "k": "box",
         "label": "",
         "x": 0.1968,
         "y": 0.7246,
         "w": 0.4574,
         "h": 0.1422
        },
        {
         "k": "box",
         "label": "",
         "x": 0.1956,
         "y": 0.243,
         "w": 0.6182,
         "h": 0.1399
        }
       ],
       "w": 516,
       "h": 266
      }
     ]
    },
    {
     "id": "s-rdqmvz",
     "text": "View live in SEM",
     "media": [
      {
       "type": "video",
       "src": "clips/p-fibmill-s-rdqmvz-mvsbjy2w.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "when the operation starts in SmartFIB this will change to Mill+SEM",
         "x": 0.4675,
         "y": 0.7775,
         "w": 0.1253,
         "h": 0.0946,
         "t0": 0,
         "t1": 3
        },
        {
         "k": "box",
         "label": "notice the imaging already changed to Frame Avg N=10, we can try to scan slower or increase N",
         "x": 0.0006,
         "y": 0.1366,
         "w": 0.1348,
         "h": 0.3089,
         "t0": 19.56,
         "t1": 22.56
        },
        {
         "k": "box",
         "label": "Additionally We can Change to ESB which is less sensitive to the interference from the Ion beam",
         "x": 0.3907,
         "y": 0.664,
         "w": 0.2411,
         "h": 0.311,
         "t0": 34.02,
         "t1": 37.02
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "mill",
    "milling",
    "pattern",
    "cut",
    "pt depo",
    "cross section",
    "recipe"
   ]
  },
  {
   "id": "p-gas",
   "group": "Procedures",
   "title": "GIS outgassing",
   "summary": "Do this if you are the first user of the day or if the gasses have not been utilized for a while",
   "steps": [
    {
     "id": "gas-1",
     "text": "Turn **EHT off**.",
     "where": "SmartSEM › Control tab",
     "tags": [
      "eht"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0013,
         "y": 0.5731,
         "w": 0.0606,
         "h": 0.0102,
         "label": "Control tab → EHT"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.468,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "gas-2",
     "text": "**Retract the nozzle.**",
     "where": "FIB Control › GIS 1",
     "note": "ZEISS UniGIS manual §5.5 (retract the lance to reduce the influence of the pressure shots on the sample).",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Retract Nozzle"
        }
       ],
       "crop": {
        "x": 0.4316,
        "y": 0.2221,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "gas-3",
     "text": "Open the **Gas Injection System** panel, then click `Outgas…`.",
     "where": "SmartSEM › Panel Configuration Bar › Gas Injection System",
     "tags": [
      "outgas",
      "gis",
      "gas injection"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/gis-menu.png",
       "w": 1096,
       "h": 802
      },
      {
       "type": "video",
       "src": "clips/p-gas-gas-3-mvs9zneh.webm",
       "w": 1920,
       "h": 1080,
       "dur": 9.74,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 8.84
       },
       "cursor": [
        {
         "t": 1.96,
         "x": 0.1483,
         "y": 0.4644,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "Gas Injection System",
         "x": 0.1271,
         "y": 0.5757,
         "w": 0.1229,
         "h": 0.0651,
         "t0": 3.15,
         "t1": 6.15
        }
       ]
      }
     ]
    },
    {
     "id": "gas-4",
     "text": "**Close the columns** (SEM and FIB safety valves) in the Outgassing panel.",
     "where": "Outgassing panel",
     "warn": "Do not start outgassing with the column valves open.",
     "media": [
      {
       "type": "image",
       "src": "img/gis-outgas.png",
       "w": 341,
       "h": 394
      },
      {
       "type": "video",
       "src": "clips/p-gas-gas-4-mvsa29kj.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [
        {
         "t": 2.73,
         "x": 0.5963,
         "y": 0.4602,
         "c": 1
        },
        {
         "t": 3.83,
         "x": 0.4368,
         "y": 0.685,
         "c": 1
        },
        {
         "t": 9.83,
         "x": 0.4415,
         "y": 0.4938,
         "c": 1
        }
       ],
       "marks": []
      }
     ]
    },
    {
     "id": "gas-5",
     "text": "Press `Go` and wait about **1 min**. Repeat with **Carbon** (if desired).",
     "note": "The V1 screenshot shows Open 1.00 s / Close 2.00 s / 20 loops. ZEISS UniGIS manual §5.5 lists the standard values as 0.6 s / 10 s / 10 loops. Use the lab’s agreed values. Outgassing shortens the reservoir life — only do it when needed (reservoir not opened for >12 h).",
     "tags": [
      "go",
      "carbon",
      "platinum"
     ]
    },
    {
     "id": "gas-6",
     "text": "When the outgassing has finished and the system pressure is below **1 × 10⁻⁵ mbar**, press `Open` on the columns and return to work.",
     "where": "Outgassing panel",
     "note": "Close the Outgassing panel afterwards — while it is open, the other SmartSEM panels are disabled.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-gas-gas-6-mvsa66np.webm",
       "w": 1920,
       "h": 1080,
       "dur": 19.96,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 19.06
       },
       "cursor": [
        {
         "t": 1.23,
         "x": 0.4297,
         "y": 0.6976,
         "c": 1
        },
        {
         "t": 9.47,
         "x": 0.4947,
         "y": 0.6997,
         "c": 1
        }
       ],
       "marks": []
      }
     ]
    }
   ],
   "tags": [
    "gis",
    "outgas",
    "platinum",
    "carbon",
    "gas"
   ]
  },
  {
   "id": "p-omniclean",
   "group": "Procedures",
   "title": "FIB Pt and Carbon Deposition",
   "summary": "Depositing Pt and Carbon",
   "steps": [
    {
     "id": "s-1bruhn",
     "text": "Insert Desired GIS Nozzle",
     "where": "FIB Control > GIS 1 or GIS 2",
     "warn": "GIS Outgassing must be performed first",
     "media": [
      {
       "type": "video",
       "src": "clips/p-omniclean-s-1bruhn-mvsd88ms.webm",
       "w": 1920,
       "h": 1080,
       "dur": 12.07,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 9.63
       },
       "cursor": [
        {
         "t": 4.23,
         "x": 0.7045,
         "y": 0.3425,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "Ensure your working distance is >5mm",
         "x": 0.3712,
         "y": 0.8027,
         "w": 0.0993,
         "h": 0.063,
         "t0": 0,
         "t1": 3
        },
        {
         "k": "box",
         "label": "GIS 1 or GIS2",
         "x": 0.7352,
         "y": 0.3299,
         "w": 0.0567,
         "h": 0.0525,
         "t0": 5.62,
         "t1": 8.62
        },
        {
         "k": "box",
         "label": "Insert Nozzle",
         "x": 0.6915,
         "y": 0.5169,
         "w": 0.1099,
         "h": 0.0925,
         "t0": 6.49,
         "t1": 9.49
        }
       ]
      }
     ]
    },
    {
     "id": "s-b5fqjs",
     "text": "Prepare Pattern in SmartFIB",
     "media": [
      {
       "type": "video",
       "src": "clips/p-omniclean-s-b5fqjs-mvsdcnng.webm",
       "w": 1920,
       "h": 1080,
       "dur": 45,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 44.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Draw your Pattern",
         "x": 0.2145,
         "y": 0.3341,
         "w": 0.2293,
         "h": 0.1996,
         "t0": 1.07,
         "t1": 4.07
        },
        {
         "k": "box",
         "label": "Select the Attribute of IonBeam Pt or C",
         "x": 0.6152,
         "y": 0.2059,
         "w": 0.2872,
         "h": 0.332,
         "t0": 4.48,
         "t1": 7.48
        },
        {
         "k": "box",
         "label": "The default is 300pA 1000nm. ",
         "x": 0.6129,
         "y": 0.3257,
         "w": 0.2423,
         "h": 0.1303,
         "t0": 7.74,
         "t1": 10.74
        },
        {
         "k": "box",
         "label": "Check that the GIS nozzle actually opens. If not Cancel and Start Again. ",
         "x": 0.0242,
         "y": 0.2374,
         "w": 0.6064,
         "h": 0.5401,
         "t0": 22.43,
         "t1": 25.43
        },
        {
         "k": "box",
         "label": "It has started to depo",
         "x": 0.2323,
         "y": 0.3593,
         "w": 0.169,
         "h": 0.1219,
         "t0": 34.48,
         "t1": 37.48
        },
        {
         "k": "box",
         "label": "We can see the depo live in the SEM",
         "x": 0.3517,
         "y": 0.7376,
         "w": 0.1986,
         "h": 0.1954,
         "t0": 36.92,
         "t1": 39.92
        }
       ]
      }
     ]
    },
    {
     "id": "s-lnu995",
     "text": "Using Drift Correction Marker and Depo",
     "media": [
      {
       "type": "video",
       "src": "clips/p-omniclean-s-lnu995-mvsdlsam.webm",
       "w": 1920,
       "h": 1080,
       "dur": 90,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 89.1
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "Add Drift Correction",
         "x": 0.5774,
         "y": 0.1471,
         "w": 0.2222,
         "h": 0.2669,
         "t0": 5.84,
         "t1": 8.84
        },
        {
         "k": "box",
         "label": "Move the marker to a clear area next to your target",
         "x": 0.0952,
         "y": 0.2963,
         "w": 0.4433,
         "h": 0.3698,
         "t0": 8.67,
         "t1": 11.67
        },
        {
         "k": "box",
         "label": "Optional: mark first otherwise: live",
         "x": 0.5999,
         "y": 0.3131,
         "w": 0.2778,
         "h": 0.208,
         "t0": 10,
         "t1": 13
        },
        {
         "k": "box",
         "label": "Registration image",
         "x": 0.6034,
         "y": 0.4896,
         "w": 0.2742,
         "h": 0.1891,
         "t0": 15.62,
         "t1": 18.62
        },
        {
         "k": "box",
         "label": "it will do an auto image, insert the gis then check it again after",
         "x": 0.2736,
         "y": 0.3572,
         "w": 0.2447,
         "h": 0.2248,
         "t0": 50.61,
         "t1": 60
        },
        {
         "k": "box",
         "label": "we can see the pattern grow in the SEM",
         "x": 0.3044,
         "y": 0.4812,
         "w": 0.2482,
         "h": 0.1009,
         "t0": 88.54,
         "t1": 89.95
        }
       ]
      }
     ]
    }
   ],
   "tags": [
    "FIB depositon",
    "Carbon",
    "Platinum"
   ]
  },
  {
   "id": "p-depcalc",
   "group": "Procedures",
   "title": "Deposition current calculator",
   "summary": "Enter the pattern area and get the highest FIB current preset that stays under the allowed pA/µm².",
   "steps": [
    {
     "id": "dc-1",
     "text": "Enter the **width and height** of the deposition pattern (or choose a circle and enter the diameter).",
     "where": "SmartFIB › pattern size",
     "tags": [
      "area",
      "size"
     ]
    },
    {
     "id": "dc-2",
     "text": "Check the **limit** (pA/µm²). The default is the lab value; change it for a different precursor or recipe.",
     "tags": [
      "density",
      "limit"
     ]
    },
    {
     "id": "dc-3",
     "text": "Select the **recommended preset** (highlighted). The next one up is shown with its density so you can see why it was rejected.",
     "where": "SmartFIB › Probe (beam current)",
     "note": "The default limit of 10 pA/µm² comes from the lab rule of thumb (10 × 10 µm → no more than 1 nA). Confirm it for your recipe.",
     "tags": [
      "probe",
      "preset",
      "current"
     ]
    }
   ],
   "widget": {
    "type": "depcalc",
    "presets": [
     10,
     20,
     50,
     100,
     300,
     700,
     1500,
     3000,
     7000
    ],
    "maxDensity": 10
   },
   "tags": [
    "deposition",
    "platinum",
    "pt",
    "current",
    "density",
    "pA",
    "calculator",
    "preset",
    "area"
   ],
   "status": "draft"
  },
  {
   "id": "p-undercut",
   "group": "Procedures",
   "title": "Undercut depth calculator",
   "summary": "How deep to set the undercut, and how wide the trench must be, so the beam reaches under the lamella with the stage at rotation 0.",
   "steps": [
    {
     "id": "uc-1",
     "text": "Enter the **lamella depth D**, the **thickness t** and the **trench width on the beam side**. Leave the stage tilt at **0°** for a standard undercut.",
     "where": "SmartFIB › pattern size",
     "tags": [
      "undercut",
      "depth",
      "trench"
     ]
    },
    {
     "id": "uc-2",
     "text": "Read the **pattern depth**. It is measured along the ion beam, so it is larger than the vertical depth D.",
     "where": "SmartFIB › pattern Attributes › Depth",
     "tags": [
      "depth"
     ]
    },
    {
     "id": "uc-3",
     "text": "If the box turns red, the **trench on the beam side is too narrow**: widen it by the amount shown before you start the undercut.",
     "warn": "A trench that is too narrow means the beam cannot reach the bottom of the lamella and the undercut will not free it.",
     "tags": [
      "trench",
      "undercut"
     ]
    }
   ],
   "widget": {
    "type": "undercut",
    "angle": 54
   },
   "tags": [
    "undercut",
    "depth",
    "calculator",
    "j-cut",
    "u-cut",
    "tilt",
    "rotation",
    "trench",
    "cut"
   ],
   "status": "draft"
  },
  {
   "id": "p-serial",
   "group": "Procedures",
   "title": "Serial imaging - Advanced Application",
   "summary": "Dual SEM/FIB serial imaging (slice and view).",
   "steps": [
    {
     "id": "sv-0",
     "text": "Set up your SEM Image and Imaging Conditions\nSet your **Focus, Stig, and Noise Reduction Method**\n\n**Sample prep is critical** — platinum alone typically does not stabilise the sample enough.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-sv-0-mvselzzt.webm",
       "w": 1920,
       "h": 1080,
       "dur": 13.57,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 12.67
       },
       "cursor": [],
       "marks": []
      }
     ],
     "where": "**SmartSEM**"
    },
    {
     "id": "sv-1",
     "text": "Dual-scan imaging is possible before you start. Set the SEM **B/C** and imaging settings for each channel **before** pressing Start.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-sv-1-mvsefdh3.webm",
       "w": 1920,
       "h": 1080,
       "dur": 30.1,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 5.78
       },
       "cursor": [
        {
         "t": 0.81,
         "x": 0.1294,
         "y": 0.0945,
         "c": 1
        }
       ],
       "marks": [
        {
         "k": "box",
         "label": "dual channel",
         "x": 0.1164,
         "y": 0.1513,
         "w": 0.1489,
         "h": 0.0735,
         "t0": 1.87,
         "t1": 4.87
        },
        {
         "k": "box",
         "label": "ESB ",
         "x": 0.7583,
         "y": 0.8006,
         "w": 0.0851,
         "h": 0.0609,
         "t0": 6.47,
         "t1": 9.47
        },
        {
         "k": "box",
         "label": "SE2",
         "x": 0.4651,
         "y": 0.9036,
         "w": 0.0686,
         "h": 0.0504,
         "t0": 6.47,
         "t1": 9.47
        }
       ]
      }
     ]
    },
    {
     "id": "sv-2",
     "text": "Setting up the FIB pattern attribute for Serial Sectioning condition.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-sv-2-mvseklit.webm",
       "w": 1920,
       "h": 1080,
       "dur": 23.99,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 23.09
       },
       "cursor": [],
       "marks": []
      }
     ],
     "where": "SmartFIB"
    },
    {
     "id": "s-eqxemo",
     "text": "Make sure to focus the FIB to get a sharp cut, optionally suggested that you deposit Pt or Carbon to avoid curtaining",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-s-eqxemo-mvserhgp.webm",
       "w": 1920,
       "h": 1080,
       "dur": 25,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 24.1
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "s-kujmvz",
     "text": "Set up the Save Folder",
     "where": "SmartFIB",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-s-kujmvz-mvsesoy2.webm",
       "w": 1920,
       "h": 1080,
       "dur": 18.3,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 17.4
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "sv-3",
     "text": "You can pause to **beam-shift** the sample: at the first pause, answer **Yes** when it asks about the hard panel, then beam-shift from the **Control** tab."
    },
    {
     "id": "sv-4",
     "text": "You should hear a lot of clicking as it switches between the SEM and the FIB.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-sv-4-mvsf38kx.webm",
       "w": 1920,
       "h": 1080,
       "dur": 25.08,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 24.18
       },
       "cursor": [],
       "marks": [
        {
         "k": "box",
         "label": "SSI took an SEM image",
         "x": 0.2512,
         "y": 0.208,
         "w": 0.305,
         "h": 0.6409,
         "t0": 7.94,
         "t1": 10.94
        },
        {
         "k": "box",
         "label": "now its milling",
         "x": 0.4699,
         "y": 0.8153,
         "w": 0.1253,
         "h": 0.0483,
         "t0": 10.41,
         "t1": 13.41
        },
        {
         "k": "box",
         "label": "Set \"on start mill\" to Frozen",
         "x": 0.6129,
         "y": 0.5253,
         "w": 0.2033,
         "h": 0.2963,
         "t0": 22.06,
         "t1": 25.01
        }
       ]
      }
     ]
    },
    {
     "id": "sv-5",
     "text": "**During a pause:** wait for the pause state → answer **Yes** to the hard panel → you may change **Focus, Stig, Noise Reduction, B/C** → press **Continue**.",
     "warn": "DO NOT change MAG or STORE RESOLUTION.",
     "media": [
      {
       "type": "video",
       "src": "clips/p-serial-sv-5-mvsf6fyu.webm",
       "w": 1920,
       "h": 1080,
       "dur": 36.97,
       "pointer": "halo",
       "trim": {
        "start": 0,
        "end": 36.07
       },
       "cursor": [],
       "marks": []
      }
     ]
    },
    {
     "id": "sv-6",
     "text": "Suggestion: on *Start mill*, set it to **SEM (Frozen)**."
    },
    {
     "id": "sv-7",
     "text": "Getting DC — unclear at this time.",
     "status": "draft"
    }
   ],
   "tags": [
    "serial",
    "slice and view",
    "atlas",
    "pause"
   ]
  },
  {
   "id": "l-0",
   "group": "Liftout",
   "title": "Liftout overview and pre-flight",
   "summary": "The whole liftout on one page. Tick the boxes as you go.",
   "steps": [
    {
     "id": "l0-map",
     "text": "**The path:** 1 Protect (Pt) → 2 Trenches → 3 Free the lamella → 4 Insert probe and attach → 5 Lift out → 6 Attach to the grid → 7 Thin and polish → 8 Wrap up.",
     "tags": [
      "liftout",
      "overview",
      "workflow",
      "lamella"
     ],
     "status": "draft",
     "hint": "Optional: record a 20 s “whole liftout in 6 shots” montage, or add a diagram image.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-0.png",
       "w": 1600,
       "h": 900,
       "alt": "Liftout at a glance (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "l0-1",
     "text": "Beam and FIB on, **tilt eucentricity** adjusted, stage at **54°** and the sample at the **coincidence point**.",
     "note": "ZEISS SmartFIB manual §6.4.3 prerequisites.",
     "status": "draft"
    },
    {
     "id": "l0-2",
     "text": "FIB probe currents aligned — especially the **beam-shift correction**.",
     "where": "FIB Control › Align",
     "note": "ZEISS SmartFIB manual §6.4.3 prerequisites.",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5166,
         "y": 0.2185,
         "w": 0.0587,
         "h": 0.012,
         "label": "Align"
        }
       ],
       "crop": {
        "x": 0.4359,
        "y": 0.1143,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft"
    },
    {
     "id": "l0-3",
     "text": "GIS Pt reservoir outgassed if it has not been opened for a while (see *GIS outgassing*).",
     "status": "draft"
    },
    {
     "id": "l0-4",
     "text": "OmniProbe software shows **Probe Connected**, the tip is clean and sharp (see *Cleaning the OmniProbe tip*).",
     "where": "OmniProbe 400",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3972,
         "y": 0.2519,
         "w": 0.0743,
         "h": 0.0898,
         "label": "Status"
        }
       ],
       "crop": {
        "x": 0.3244,
        "y": 0.1866,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft"
    },
    {
     "id": "l0-5",
     "text": "**Touch Alarm Disable** ticked on the Specimen Current Monitor.",
     "where": "Specimen Current Monitor",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6269,
         "y": 0.1472,
         "w": 0.0333,
         "h": 0.0111,
         "label": "Touch Alarm Disable"
        }
       ],
       "crop": {
        "x": 0.5336,
        "y": 0.0425,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft"
    },
    {
     "id": "l0-6",
     "text": "Target grid is loaded and you know where its posts are (Image Navigation).",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.5833,
         "w": 0.145,
         "h": 0.1602,
         "label": "Holder / grid"
        }
       ],
       "crop": {
        "x": 0.2551,
        "y": 0.5036,
        "w": 0.319,
        "h": 0.3196
       }
      }
     ],
     "status": "draft"
    },
    {
     "id": "l0-7",
     "text": "Region of interest chosen and imaged with a **slow-scan (3)** FIB image.",
     "where": "SmartFIB › toolbar",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5528,
         "y": 0.5241,
         "w": 0.033,
         "h": 0.0185,
         "label": "Scan 3"
        }
       ],
       "crop": {
        "x": 0.4593,
        "y": 0.4231,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft"
    }
   ],
   "tags": [
    "liftout",
    "checklist",
    "pre-flight",
    "lamella"
   ],
   "status": "draft"
  },
  {
   "id": "l-1",
   "group": "Liftout",
   "title": "1 · Protect the site (Pt deposition)",
   "summary": "Lay a protective Pt strip over the region of interest.",
   "steps": [
    {
     "id": "l1-1",
     "text": "Draw a **rectangle** pattern over the region of interest and choose the **Pt deposition** recipe.",
     "where": "SmartFIB › Attributes",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-1.png",
       "w": 1600,
       "h": 900,
       "alt": "Protect the site (schematic)",
       "size": 100
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5005,
         "y": 0.5463,
         "w": 0.0094,
         "h": 0.4051,
         "label": "Pattern tools"
        }
       ],
       "crop": {
        "x": 0.1791,
        "y": 0.3466,
        "w": 0.6522,
        "h": 0.6534
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: pick rectangle tool → draw → Attributes → Material = Pt recipe."
    },
    {
     "id": "l1-2",
     "text": "Protective layer thickness **0.5–1.0 µm**.",
     "note": "Range from the ZEISS SmartFIB manual (§6.4.3, protection layer).",
     "status": "draft",
     "hint": "Add your usual Pt thickness / recipe name."
    },
    {
     "id": "l1-3",
     "text": "`Insert Nozzle`, check the GIS **Platinum** channel is heated and ready, then run the deposition.",
     "where": "FIB Control › GIS 1",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Insert Nozzle"
        },
        {
         "k": "box",
         "x": 0.5239,
         "y": 0.2352,
         "w": 0.0759,
         "h": 0.0306,
         "label": "Pt channel"
        }
       ],
       "crop": {
        "x": 0.4516,
        "y": 0.18,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: Insert Nozzle → open valve → start the pattern."
    },
    {
     "id": "l1-4",
     "text": "**Retract the nozzle** as soon as the deposition is done.",
     "where": "FIB Control › GIS 1",
     "warn": "Never tilt or move the stage with the nozzle in.",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Retract Nozzle"
        }
       ],
       "crop": {
        "x": 0.4316,
        "y": 0.2221,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: Retract Nozzle."
    }
   ],
   "tags": [
    "liftout",
    "platinum",
    "pt",
    "protect",
    "deposition"
   ],
   "status": "draft",
   "widget": {
    "type": "depcalc",
    "presets": [
     10,
     20,
     50,
     100,
     300,
     700,
     1500,
     3000,
     7000
    ],
    "maxDensity": 10
   }
  },
  {
   "id": "l-2",
   "group": "Liftout",
   "title": "2 · Trench milling",
   "summary": "Open a trench on both sides of the lamella.",
   "steps": [
    {
     "id": "l2-1",
     "text": "Draw the **front trench** and **back trench** patterns around the Pt strip.",
     "where": "SmartFIB",
     "status": "draft",
     "hint": "Clip: draw both trench patterns, show Attributes (recipe, depth).",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-2.png",
       "w": 1600,
       "h": 900,
       "alt": "Trench milling (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "l2-2",
     "text": "Mill coarse first, then **clean up** the lamella faces with a smaller current.",
     "status": "draft",
     "hint": "Add your coarse / clean-up currents and typical times."
    },
    {
     "id": "l2-3",
     "text": "Take a slow-scan (3) image between steps to check progress.",
     "where": "SmartFIB › toolbar",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5528,
         "y": 0.5241,
         "w": 0.033,
         "h": 0.0185,
         "label": "Scan 3"
        }
       ],
       "crop": {
        "x": 0.4593,
        "y": 0.4231,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Optional."
    }
   ],
   "tags": [
    "liftout",
    "trench",
    "mill",
    "lamella"
   ],
   "status": "draft"
  },
  {
   "id": "l-3",
   "group": "Liftout",
   "title": "3 · Free the lamella (U-cut / J-cut)",
   "summary": "Cut around the lamella but leave one small connection.",
   "steps": [
    {
     "id": "l3-1",
     "text": "Tilt the stage to the **undercut angle** used in your lab.",
     "where": "Stage tab",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-3.png",
       "w": 1600,
       "h": 900,
       "alt": "Free the lamella (schematic)",
       "size": 100
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6509,
         "w": 0.0655,
         "h": 0.0278,
         "label": "T"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5546,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Record the standard angle here; clip: type it in the Stage goto window."
    },
    {
     "id": "l3-2",
     "text": "Cut under the bottom of the lamella.",
     "status": "draft",
     "hint": "Clip: pattern and mill at the undercut angle."
    },
    {
     "id": "l3-3",
     "text": "Return to **54°**. Cut the sides and leave **one small connection** (tab) holding the lamella.",
     "where": "Stage tab",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6509,
         "w": 0.0655,
         "h": 0.0278,
         "label": "T = 54°"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5546,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: back to 54°, side-cut patterns, leave the tab."
    }
   ],
   "tags": [
    "liftout",
    "undercut",
    "j-cut",
    "u-cut",
    "tab"
   ],
   "status": "draft",
   "widget": {
    "type": "undercut",
    "angle": 54
   }
  },
  {
   "id": "l-4",
   "group": "Liftout",
   "title": "4 · Insert the OmniProbe and attach",
   "summary": "Bring the probe in, touch the lamella and weld it with Pt.",
   "steps": [
    {
     "id": "l4-1",
     "text": "Check **Touch Alarm Disable** is ticked and the **chamber camera** is visible.",
     "where": "Specimen Current Monitor · Stage Navigation Bar",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-4.png",
       "w": 1600,
       "h": 900,
       "alt": "Insert the probe and attach (schematic)",
       "size": 100
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6269,
         "y": 0.1472,
         "w": 0.0333,
         "h": 0.0111,
         "label": "Touch alarm off"
        }
       ],
       "crop": {
        "x": 0.5336,
        "y": 0.0425,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: show both on screen."
    },
    {
     "id": "l4-2",
     "text": "In OmniProbe pick the insertion preset (e.g. `Standby`) and press `Goto`.",
     "where": "OmniProbe 400 › right column",
     "tags": [
      "insert",
      "omniprobe"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4011,
         "y": 0.1111,
         "w": 0.0408,
         "h": 0.0852,
         "label": "Preset list"
        },
        {
         "k": "box",
         "x": 0.4455,
         "y": 0.1565,
         "w": 0.0224,
         "h": 0.0204,
         "label": "Goto"
        }
       ],
       "crop": {
        "x": 0.3245,
        "y": 0.0435,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: select the preset, press Goto, watch the chamber camera. Confirm which preset your lab uses first."
    },
    {
     "id": "l4-3",
     "text": "Go to `Tip Coincidence` so the tip appears in the **FIB** and **SEM** images.",
     "where": "OmniProbe 400",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4011,
         "y": 0.1111,
         "w": 0.0408,
         "h": 0.0852,
         "label": "Tip Coincidence"
        },
        {
         "k": "box",
         "x": 0.4455,
         "y": 0.1565,
         "w": 0.0224,
         "h": 0.0204,
         "label": "Goto"
        }
       ],
       "crop": {
        "x": 0.3245,
        "y": 0.0435,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: preset Tip Coincidence → Goto → tip appears in the images."
    },
    {
     "id": "l4-4",
     "text": "Approach the lamella with the **jog pads** at a **slow speed**; stop just before contact.",
     "where": "OmniProbe 400 › center",
     "warn": "Watch the chamber camera while approaching.",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.2438,
         "y": 0.1435,
         "w": 0.0577,
         "h": 0.0991,
         "label": "X / Y"
        },
        {
         "k": "box",
         "x": 0.3021,
         "y": 0.1435,
         "w": 0.0567,
         "h": 0.0991,
         "label": "Z / R"
        },
        {
         "k": "box",
         "x": 0.3598,
         "y": 0.1657,
         "w": 0.0328,
         "h": 0.0722,
         "label": "Speed"
        }
       ],
       "crop": {
        "x": 0.1545,
        "y": 0.0291,
        "w": 0.3274,
        "h": 0.328
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: jog approach with the cursor highlighted on the pad and the speed list."
    },
    {
     "id": "l4-5",
     "text": "Deposit a **Pt weld** between the probe tip and the lamella (nozzle in → deposit → **nozzle out**).",
     "where": "SmartFIB · FIB Control › GIS 1",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Nozzle"
        }
       ],
       "crop": {
        "x": 0.4316,
        "y": 0.2221,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: draw a small rectangle over the contact, deposit, retract the nozzle."
    },
    {
     "id": "l4-6",
     "text": "Cut the remaining **tab** to free the lamella.",
     "status": "draft",
     "hint": "Clip: draw the cut, mill, confirm the lamella moves with the probe."
    }
   ],
   "tags": [
    "liftout",
    "omniprobe",
    "attach",
    "weld",
    "probe",
    "insert",
    "needle"
   ],
   "status": "draft"
  },
  {
   "id": "l-5",
   "group": "Liftout",
   "title": "5 · Lift out and retract",
   "summary": "Pull the lamella clear of the trench.",
   "steps": [
    {
     "id": "l5-1",
     "text": "Raise the probe in **Z** a safe distance, then check that the lamella is free of the trench.",
     "where": "OmniProbe 400 › Z / R",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-5.png",
       "w": 1600,
       "h": 900,
       "alt": "Lift out and retract (schematic)",
       "size": 100
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3021,
         "y": 0.1435,
         "w": 0.0567,
         "h": 0.0991,
         "label": "Z / R"
        }
       ],
       "crop": {
        "x": 0.2205,
        "y": 0.0828,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: Z-up with the cursor on the Z button."
    },
    {
     "id": "l5-2",
     "text": "Move the lamella away from the sample.",
     "status": "draft",
     "hint": "Add how far / which direction."
    },
    {
     "id": "l5-3",
     "text": "Before moving the stage, make sure the probe is clear of everything (check the chamber camera).",
     "where": "Stage Navigation Bar",
     "warn": "Never move or tilt the stage with the probe near the sample.",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.7843,
         "w": 0.1201,
         "h": 0.1519,
         "label": "Chamber camera"
        }
       ],
       "crop": {
        "x": 0.27,
        "y": 0.7279,
        "w": 0.2642,
        "h": 0.2647
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: chamber camera view."
    }
   ],
   "tags": [
    "liftout",
    "lift out",
    "retract",
    "probe"
   ],
   "status": "draft"
  },
  {
   "id": "l-6",
   "group": "Liftout",
   "title": "6 · Attach to the grid",
   "summary": "Drive to the grid, weld the lamella to a post, cut the probe free.",
   "steps": [
    {
     "id": "l6-1",
     "text": "Move the stage to the grid using **Image Navigation**, then re-find coincidence on the post.",
     "where": "SmartSEM › Stage Navigation Bar",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-6.png",
       "w": 1600,
       "h": 900,
       "alt": "Attach to the grid (schematic)",
       "size": 100
      },
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.5833,
         "w": 0.145,
         "h": 0.1602,
         "label": "Grid"
        }
       ],
       "crop": {
        "x": 0.2551,
        "y": 0.5036,
        "w": 0.319,
        "h": 0.3196
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: double-click the grid in Image Navigation, FIB/SEM coincidence on the post."
    },
    {
     "id": "l6-2",
     "text": "Bring the lamella to the post with the probe.",
     "where": "OmniProbe 400",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.2438,
         "y": 0.1435,
         "w": 0.0577,
         "h": 0.0991,
         "label": "Jog"
        }
       ],
       "crop": {
        "x": 0.1627,
        "y": 0.0828,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: jog approach to the post."
    },
    {
     "id": "l6-3",
     "text": "**Pt weld** the lamella to the post (nozzle in → deposit → nozzle out).",
     "where": "FIB Control › GIS 1",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Nozzle"
        }
       ],
       "crop": {
        "x": 0.4316,
        "y": 0.2221,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: weld."
    },
    {
     "id": "l6-4",
     "text": "**Cut the probe free** from the lamella and retract the probe.",
     "where": "OmniProbe 400",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4011,
         "y": 0.1111,
         "w": 0.0408,
         "h": 0.0852,
         "label": "Retract"
        },
        {
         "k": "box",
         "x": 0.4455,
         "y": 0.1565,
         "w": 0.0224,
         "h": 0.0204,
         "label": "Goto"
        }
       ],
       "crop": {
        "x": 0.3245,
        "y": 0.0435,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: cut between probe and lamella, then Retract preset + Goto."
    },
    {
     "id": "l6-5",
     "text": "Check the status banner reads **Probe Retracted** before moving the stage.",
     "where": "OmniProbe 400 › status",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3972,
         "y": 0.3194,
         "w": 0.0743,
         "h": 0.0222,
         "label": "Probe Retracted"
        }
       ],
       "crop": {
        "x": 0.3244,
        "y": 0.2203,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Optional."
    }
   ],
   "tags": [
    "liftout",
    "grid",
    "post",
    "attach",
    "weld"
   ],
   "status": "draft"
  },
  {
   "id": "l-7",
   "group": "Liftout",
   "title": "7 · Thin and polish",
   "summary": "Thin the lamella to the target thickness.",
   "steps": [
    {
     "id": "l7-1",
     "text": "Thin with **decreasing currents**, taking a slow-scan image between steps.",
     "where": "SmartFIB",
     "status": "draft",
     "hint": "Add your thinning recipe table (current, target thickness, tilt).",
     "media": [
      {
       "type": "image",
       "src": "img/fig-lo-7.png",
       "w": 1600,
       "h": 900,
       "alt": "Thin and polish (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "l7-2",
     "text": "Optional (licence): use the **Lamella** tool and the polishing tilt for the final steps.",
     "note": "ZEISS SmartFIB manual §6.4.3; thickness measurement §8.3; automatic polishing §8.4.",
     "status": "draft",
     "hint": "Clip: Lamella tool → Attributes → Milling steps."
    },
    {
     "id": "l7-3",
     "text": "Check the thickness with the SEM (low kV) before you stop.",
     "status": "draft",
     "hint": "Add your thickness check and low-kV settings."
    }
   ],
   "tags": [
    "liftout",
    "thin",
    "polish",
    "lamella",
    "thickness"
   ],
   "status": "draft"
  },
  {
   "id": "l-8",
   "group": "Liftout",
   "title": "8 · Wrap up",
   "summary": "Leave the instrument safe.",
   "steps": [
    {
     "id": "l8-1",
     "text": "Probe on **Retract**, GIS nozzle **retracted**, **Touch alarm re-enabled**.",
     "where": "OmniProbe · FIB Control · Specimen Current",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6269,
         "y": 0.1472,
         "w": 0.0333,
         "h": 0.0111,
         "label": "Re-enable alarm"
        }
       ],
       "crop": {
        "x": 0.5336,
        "y": 0.0425,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: untick Touch Alarm Disable, check nozzle and probe states."
    },
    {
     "id": "l8-2",
     "text": "Stage to 0° tilt, then `Exchange` and remove the sample.",
     "where": "SmartSEM",
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0057,
         "y": 0.5241,
         "w": 0.0114,
         "h": 0.0241,
         "label": "Exchg"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.4259,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "status": "draft",
     "hint": "Clip: tilt to 0, press Exchange."
    }
   ],
   "tags": [
    "liftout",
    "end",
    "finish",
    "shutdown"
   ],
   "status": "draft"
  },
  {
   "id": "cy-0",
   "group": "Cylinder liftout",
   "title": "Cylinder liftout overview",
   "summary": "Make a 2–10 µm cylinder on a pin for tomography. The whole route on one page.",
   "steps": [
    {
     "id": "cy0-1",
     "text": "Choose the **cylinder diameter**: **2–10 µm** is typical. Smaller gives better resolution, larger gives a bigger field of view.",
     "note": "Pick it from the pixel size and field of view you need for the tomography.",
     "status": "draft",
     "hint": "Clip: none needed. Add your rule of thumb for choosing the diameter.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-0.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy0-2",
     "text": "Choose the **length** so the cylinder stays clear of the pin and clip over the whole **tilt range**.",
     "status": "draft",
     "hint": "Add your usual length-to-diameter ratio."
    },
    {
     "id": "cy0-3",
     "text": "Prepare the **pin / post** with a flat, clean tip, mounted so its axis is straight up in the holder.",
     "tags": [
      "pin",
      "post",
      "holder"
     ],
     "status": "draft",
     "hint": "Clip: pin in the clip and holder."
    },
    {
     "id": "cy0-4",
     "text": "Make the **block** a little **wider than the diameter** you want, so the annular milling has material to remove.",
     "status": "draft",
     "hint": "Add your usual block size."
    }
   ],
   "tags": [
    "cylinder",
    "pillar",
    "tomography",
    "liftout",
    "pin",
    "annular"
   ],
   "status": "draft"
  },
  {
   "id": "cy-1",
   "group": "Cylinder liftout",
   "title": "1 · Extract the block",
   "summary": "Cut a small square block out of the sample, as in a lamella liftout.",
   "steps": [
    {
     "id": "cy1-1",
     "text": "Protect the region of interest with a **Pt cap** a bit larger than the target diameter.",
     "where": "SmartFIB › Attributes › Pt recipe",
     "note": "Same steps as Liftout chapter 1 (0.5–1.0 µm protective layer).",
     "tags": [
      "pt",
      "platinum",
      "protect"
     ],
     "status": "draft",
     "hint": "Clip: Pt deposition on a square, as in Liftout 1.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-1.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy1-2",
     "text": "Mill a **trench around the block** on three sides, leaving one small bridge.",
     "where": "SmartFIB › patterns",
     "status": "draft",
     "hint": "Clip: three-sided trench around the block."
    },
    {
     "id": "cy1-3",
     "text": "**Undercut** the block so that only the bridge holds it (J-cut).",
     "tags": [
      "undercut",
      "j-cut"
     ],
     "status": "draft",
     "hint": "Clip: tilt for the undercut and cut along the bottom."
    },
    {
     "id": "cy1-4",
     "text": "**Insert the OmniProbe**, touch the block, **weld** with Pt, then cut the bridge and lift the block out.",
     "where": "OmniProbe 400 · FIB Control › GIS 1",
     "note": "Same moves as Liftout chapters 4 and 5.",
     "warn": "Never tilt or move the stage with the nozzle in.",
     "tags": [
      "omniprobe",
      "weld",
      "lift"
     ],
     "status": "draft",
     "hint": "Clip: insert probe, weld, cut free, retract."
    }
   ],
   "widget": {
    "type": "undercut",
    "angle": 54
   },
   "tags": [
    "cylinder",
    "block",
    "liftout",
    "extract"
   ],
   "status": "draft"
  },
  {
   "id": "cy-2",
   "group": "Cylinder liftout",
   "title": "2 · Mount the block on the pin",
   "summary": "Weld the block to the top of the pin so the region of interest is at the top.",
   "steps": [
    {
     "id": "cy2-1",
     "text": "Move the stage so the **pin tip** is in the middle of the FIB and SEM views.",
     "where": "SmartSEM › Stage tab",
     "tags": [
      "stage",
      "tilt",
      "pin"
     ],
     "status": "draft",
     "hint": "Clip: bring the pin into view; show the tilt and the stage position tabs.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-2.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy2-2",
     "text": "Bring the block down on the **flat tip** with the **region of interest on top**.",
     "where": "OmniProbe 400 › jog",
     "status": "draft",
     "hint": "Clip: lower the block onto the pin with the probe."
    },
    {
     "id": "cy2-3",
     "text": "Weld the block to the pin with **Pt** (two or more spots).",
     "where": "FIB Control › GIS 1",
     "tags": [
      "weld",
      "platinum"
     ],
     "status": "draft",
     "hint": "Clip: insert nozzle and deposit Pt at the contact."
    },
    {
     "id": "cy2-4",
     "text": "**Cut the probe free**, then retract the probe and the nozzle.",
     "warn": "Check the nozzle is out before you move the stage.",
     "tags": [
      "cut",
      "retract"
     ],
     "status": "draft",
     "hint": "Clip: cut the probe, retract."
    }
   ],
   "tags": [
    "cylinder",
    "pin",
    "weld",
    "mount"
   ],
   "status": "draft"
  },
  {
   "id": "cy-3",
   "group": "Cylinder liftout",
   "title": "3 · Mill the cylinder (annular milling)",
   "summary": "Turn the block into a cylinder with donut patterns of shrinking diameter and current.",
   "steps": [
    {
     "id": "cy3-1",
     "text": "Tilt so the **pin axis is along the ion beam**.",
     "where": "SmartSEM › Stage tab › T",
     "note": "For a vertical pin this is the same tilt as the FIB tilt (54° on the Crossbeam).",
     "tags": [
      "tilt",
      "rotate"
     ],
     "status": "draft",
     "hint": "Clip: set the tilt; show the rotate/tilt panel.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-3.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy3-2",
     "text": "Centre the pin axis in the FIB view and draw an **annular (donut) pattern** centred on the ROI.",
     "where": "SmartFIB › pattern tools",
     "status": "draft",
     "hint": "Clip: pattern tools, annulus, set inner and outer diameter."
    },
    {
     "id": "cy3-3",
     "text": "Set the **inner diameter** a little **larger than the final cylinder** and run the first, coarse pass.",
     "where": "SmartFIB › Probe (beam current)",
     "tags": [
      "probe",
      "current"
     ],
     "status": "draft",
     "hint": "Add the current and diameters you use for the first pass."
    },
    {
     "id": "cy3-4",
     "text": "Repeat with a **smaller diameter and lower current**, in two or three stages, down to the target diameter.",
     "note": "Mill deep enough to cut through the block down to the pin.",
     "tags": [
      "annular",
      "donut"
     ],
     "status": "draft",
     "hint": "Add the stage table (current and inner diameter for each pass)."
    }
   ],
   "tags": [
    "cylinder",
    "annular",
    "donut",
    "mill",
    "pillar"
   ],
   "status": "draft"
  },
  {
   "id": "cy-4",
   "group": "Cylinder liftout",
   "title": "4 · Fine milling and clean-up",
   "summary": "Finish at the target diameter with low current and check the sides.",
   "steps": [
    {
     "id": "cy4-1",
     "text": "Run the **final annular pass** at the **target diameter** and **low current**.",
     "where": "SmartFIB › Probe (beam current)",
     "status": "draft",
     "hint": "Add the final current and diameter.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-4.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy4-2",
     "text": "Look at the cylinder from **two directions** and check the **sides are straight** (no taper).",
     "where": "SmartSEM › Stage tab › R",
     "tags": [
      "rotate",
      "taper"
     ],
     "status": "draft",
     "hint": "Clip: rotate the stage and compare the two views."
    },
    {
     "id": "cy4-3",
     "text": "If the cylinder is **wider at the base**, repeat the last pass with a **tiny stage tilt**.",
     "status": "draft",
     "hint": "Add the tilt you use to correct taper."
    },
    {
     "id": "cy4-4",
     "text": "Finish with a **low-kV clean-up** to reduce surface damage.",
     "tags": [
      "kv",
      "cleanup"
     ],
     "status": "draft",
     "hint": "Add your low-kV settings."
    }
   ],
   "tags": [
    "cylinder",
    "fine",
    "cleanup",
    "taper"
   ],
   "status": "draft"
  },
  {
   "id": "cy-5",
   "group": "Cylinder liftout",
   "title": "5 · Check before tomography",
   "summary": "Check the finished cylinder over the whole tilt range before it leaves the instrument.",
   "steps": [
    {
     "id": "cy5-1",
     "text": "Measure and **note the diameter and height** of the cylinder.",
     "tags": [
      "measure"
     ],
     "status": "draft",
     "hint": "Clip: measure on the SEM image.",
     "media": [
      {
       "type": "image",
       "src": "img/fig-cy-5.png",
       "w": 1600,
       "h": 900,
       "alt": "Cylinder liftout figure (schematic)",
       "size": 100
      }
     ]
    },
    {
     "id": "cy5-2",
     "text": "Tilt through the full tilt range and check that the **cylinder stays in view** and nothing **blocks the beam**.",
     "warn": "Move slowly near the extremes and watch the pole piece, the detectors and the clip.",
     "tags": [
      "tilt"
     ],
     "status": "draft",
     "hint": "Clip: tilt to the two extremes and rotate the pin."
    },
    {
     "id": "cy5-3",
     "text": "Retract everything, return to the exchange position and unload the pin.",
     "where": "SmartSEM › Stage tab › Exchange",
     "tags": [
      "exchange"
     ],
     "status": "draft",
     "hint": "Clip: exchange."
    }
   ],
   "tags": [
    "cylinder",
    "tomography",
    "check"
   ],
   "status": "draft"
  },
  {
   "id": "f-layout",
   "group": "Find it",
   "title": "Screen layout",
   "summary": "Which window lives in which corner of the 2×2 workstation screen.",
   "steps": [
    {
     "id": "loc-layout",
     "text": "**Four windows, four corners.** Top-left: OmniProbe. Top-right: FIB Control, Specimen Current Monitor, Airlock and Stage Navigation panels. Bottom-left: SmartSEM. Bottom-right: SmartFIB.",
     "where": "Workstation screen (2×2)",
     "tags": [
      "layout",
      "windows",
      "screen",
      "monitors",
      "where"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0,
         "y": 0,
         "w": 0.4995,
         "h": 0.4995,
         "label": "OmniProbe 400",
         "pos": "in"
        },
        {
         "k": "box",
         "x": 0.5005,
         "y": 0,
         "w": 0.4995,
         "h": 0.4995,
         "label": "FIB Control · Airlock · Stage Nav",
         "pos": "in"
        },
        {
         "k": "box",
         "x": 0,
         "y": 0.5005,
         "w": 0.4995,
         "h": 0.4995,
         "label": "SmartSEM",
         "pos": "in"
        },
        {
         "k": "box",
         "x": 0.5005,
         "y": 0.5005,
         "w": 0.4995,
         "h": 0.4995,
         "label": "SmartFIB",
         "pos": "in"
        }
       ]
      }
     ],
     "label": "Which window is in which corner"
    }
   ],
   "tags": [
    "layout"
   ]
  },
  {
   "id": "f-sem",
   "group": "Find it",
   "title": "SmartSEM",
   "summary": "Stage, tilt/rotate, beam, navigation and toolbar.",
   "steps": [
    {
     "id": "loc-stage-tr",
     "text": "**Stage tilt (T) and rotation (R)**",
     "where": "SmartSEM › Crossbeam SEM Control › **Stage** tab",
     "note": "Double-click the **Stage at** T (or R) readout to open the *Stage goto* window, type the angle, confirm. For FIB work the stage is tilted to **54°** so the ion beam hits the surface perpendicular.",
     "tags": [
      "tilt",
      "rotate",
      "rotation",
      "angle",
      "54",
      "T",
      "R",
      "stage goto"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6509,
         "w": 0.0655,
         "h": 0.0278,
         "label": "T and R"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5546,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ],
     "hint": "Clip idea: double-click the T readout, type 54, confirm; then the same for R = 0."
    },
    {
     "id": "loc-stage-xyzm",
     "text": "**Stage position: X, Y, Z and M**",
     "where": "SmartSEM › Crossbeam SEM Control › **Stage** tab",
     "note": "**M** is the axis used to re-center a feature while tilting (it changes the working distance). Z = height of the stage.",
     "tags": [
      "position",
      "xyz",
      "M axis",
      "height",
      "goto"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.6046,
         "w": 0.0655,
         "h": 0.0917,
         "label": "X Y Z M"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.5402,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-tabs",
     "text": "**Crossbeam SEM Control tabs (Control · Imaging · Gun · Vacuum · Stage)**",
     "where": "SmartSEM › top-left panel",
     "note": "**EHT On** (beam on) is in this top-left panel on the **Control** tab. The **Stage** tab holds the position, tilt and rotation readouts.",
     "tags": [
      "EHT",
      "beam on",
      "beam off",
      "control",
      "imaging",
      "gun",
      "vacuum",
      "stage tab"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0013,
         "y": 0.5731,
         "w": 0.0606,
         "h": 0.0102,
         "label": "Panel tabs"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.468,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-tracksafe",
     "text": "**Track Z · Protected Z · Safe Navigation**",
     "where": "SmartSEM › Crossbeam SEM Control › **Stage** tab › Options",
     "note": "Keep **Safe Navigation** ticked. **Track Z** keeps the sample in focus as you move (turn it on after you focus).",
     "tags": [
      "track z",
      "safe navigation",
      "protected z",
      "collision",
      "focus"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0047,
         "y": 0.7426,
         "w": 0.066,
         "h": 0.0565,
         "label": "Stage options"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.6606,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-stage-stop",
     "text": "**Stage STOP button**",
     "where": "SmartSEM › Crossbeam SEM Control › **Stage** tab",
     "note": "Stops stage movement immediately.",
     "tags": [
      "stop",
      "emergency",
      "halt"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0057,
         "y": 0.6981,
         "w": 0.0203,
         "h": 0.0296,
         "label": "STOP"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.6027,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-exchange",
     "text": "**Exchange (send the stage to the exchange position)**",
     "where": "SmartSEM › toolbar (far left) · also a key on the keyboard panel",
     "note": "Brings the stage down to the exchange position and opens the interlock door.",
     "tags": [
      "exchange",
      "sample",
      "unload",
      "door",
      "interlock"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0057,
         "y": 0.5241,
         "w": 0.0114,
         "h": 0.0241,
         "label": "Exchg"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.4259,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-scan-speed",
     "text": "**Scan speed 1 · 2 · 3 (Fast · Medium · Slow)**",
     "where": "SmartSEM › toolbar",
     "tags": [
      "scan",
      "fast",
      "medium",
      "slow",
      "speed",
      "freeze"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.0203,
         "y": 0.5241,
         "w": 0.0406,
         "h": 0.0241,
         "label": "Scan speed"
        }
       ],
       "crop": {
        "x": 0,
        "y": 0.4259,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-pause",
     "text": "**Pause / Freeze**",
     "where": "SmartSEM › toolbar",
     "tags": [
      "pause",
      "freeze",
      "hold"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.1222,
         "y": 0.5241,
         "w": 0.0109,
         "h": 0.0241,
         "label": "Pause"
        }
       ],
       "crop": {
        "x": 0.0176,
        "y": 0.4259,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-crosshair",
     "text": "**Crosshair (Crs.hair)**",
     "where": "SmartSEM › toolbar",
     "note": "Toggles the crosshair overlay used to center features and for coincidence.",
     "tags": [
      "crosshair",
      "center",
      "centre",
      "coincidence"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.275,
         "y": 0.5231,
         "w": 0.0135,
         "h": 0.0259,
         "label": "Crs.hair"
        }
       ],
       "crop": {
        "x": 0.1718,
        "y": 0.4258,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-aztec-atlas",
     "text": "**Aztec (EDS) and Atlas buttons**",
     "where": "SmartSEM › toolbar (right side)",
     "tags": [
      "aztec",
      "eds",
      "atlas",
      "tomography",
      "serial"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3213,
         "y": 0.5231,
         "w": 0.027,
         "h": 0.0259,
         "label": "Atlas / Aztec"
        }
       ],
       "crop": {
        "x": 0.2248,
        "y": 0.4258,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-open-smartfib",
     "text": "**Open SmartFIB**",
     "where": "SmartSEM › top-right toolbar icons",
     "note": "The icon circled in the V1 guide. It opens the SmartFIB patterning/imaging window.",
     "tags": [
      "smartfib",
      "fib",
      "patterning",
      "open"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4097,
         "y": 0.5222,
         "w": 0.0114,
         "h": 0.0194,
         "label": "SmartFIB"
        }
       ],
       "crop": {
        "x": 0.3054,
        "y": 0.4217,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-view-select",
     "text": "**View selector (SEM ↔ FIB)**",
     "where": "SmartSEM › top-right",
     "note": "Shows which column is live. Press **F8** to switch to FIB.",
     "tags": [
      "f8",
      "switch",
      "fib",
      "sem",
      "view"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4419,
         "y": 0.5259,
         "w": 0.0343,
         "h": 0.013,
         "label": "View"
        }
       ],
       "crop": {
        "x": 0.3491,
        "y": 0.4222,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-image-nav",
     "text": "**Image Navigation (the navcam picture of the holder)**",
     "where": "SmartSEM › Stage Navigation Bar (right side)",
     "note": "**Double-click** a sample in this picture to drive the stage to it.",
     "tags": [
      "navigation",
      "navcam",
      "camera",
      "holder",
      "go to sample"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.5833,
         "w": 0.145,
         "h": 0.1602,
         "label": "Image Navigation"
        }
       ],
       "crop": {
        "x": 0.2551,
        "y": 0.5036,
        "w": 0.319,
        "h": 0.3196
       }
      }
     ]
    },
    {
     "id": "loc-chamber-cam",
     "text": "**Live chamber camera (USB TV1)**",
     "where": "SmartSEM › Stage Navigation Bar (lower right)",
     "note": "Live look inside the chamber. Keep an eye on it whenever the stage or the OmniProbe moves.",
     "tags": [
      "chamber camera",
      "usb tv1",
      "collision",
      "probe",
      "watch"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3421,
         "y": 0.7843,
         "w": 0.1201,
         "h": 0.1519,
         "label": "Chamber camera"
        }
       ],
       "crop": {
        "x": 0.27,
        "y": 0.7279,
        "w": 0.2642,
        "h": 0.2647
       }
      }
     ]
    },
    {
     "id": "loc-wd",
     "text": "**Working distance (WD) and magnification readout**",
     "where": "SmartSEM › status bar (bottom)",
     "note": "Target **WD ≈ 5.2 mm** for EDS or FIB work.",
     "tags": [
      "wd",
      "working distance",
      "mag",
      "status"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3426,
         "y": 0.95,
         "w": 0.1128,
         "h": 0.0139,
         "label": "WD"
        }
       ],
       "crop": {
        "x": 0.2749,
        "y": 0.7514,
        "w": 0.2482,
        "h": 0.2486
       }
      }
     ]
    }
   ],
   "tags": [
    "smartsem",
    "sem"
   ]
  },
  {
   "id": "f-fib",
   "group": "Find it",
   "title": "SmartFIB",
   "summary": "FIB imaging controls and patterning tools.",
   "steps": [
    {
     "id": "loc-fib-scan",
     "text": "**FIB scan buttons 1 · 2 · 3**",
     "where": "SmartFIB › toolbar",
     "note": "**1** fast live scan · **2** medium (freezes at the end of the frame) · **3** slow (freezes at end of frame). Use **3** before patterning. The same three buttons are in the Image Capture panel on the right.",
     "tags": [
      "scan",
      "fast",
      "slow",
      "medium",
      "freeze",
      "imaging"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5528,
         "y": 0.5241,
         "w": 0.033,
         "h": 0.0185,
         "label": "Scan 1 / 2 / 3"
        }
       ],
       "crop": {
        "x": 0.4593,
        "y": 0.4231,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-fib-probe",
     "text": "**FIB probe (beam current) selector**",
     "where": "SmartFIB › Image Capture panel › Acquisition",
     "note": "Set to the **30 kV : 50 pA reference** for FIB prep and alignment.",
     "tags": [
      "probe",
      "current",
      "pA",
      "nA",
      "aperture",
      "50pA",
      "reference"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.8421,
         "y": 0.7296,
         "w": 0.0452,
         "h": 0.012,
         "label": "Probe"
        }
       ],
       "crop": {
        "x": 0.7547,
        "y": 0.6254,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-fib-capture",
     "text": "**Capture · Cycle · Stop**",
     "where": "SmartFIB › Image Capture panel",
     "tags": [
      "capture",
      "cycle",
      "stop",
      "save image"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.8031,
         "y": 0.7528,
         "w": 0.0686,
         "h": 0.012,
         "label": "Capture / Cycle / Stop"
        }
       ],
       "crop": {
        "x": 0.7274,
        "y": 0.6486,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-fib-dwell",
     "text": "**Dwell time, resolution and magnification**",
     "where": "SmartFIB › Image Capture panel",
     "tags": [
      "dwell",
      "resolution",
      "magnification",
      "aspect",
      "noise"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.8041,
         "y": 0.5546,
         "w": 0.0832,
         "h": 0.0843,
         "label": "Scanning area"
        }
       ],
       "crop": {
        "x": 0.7357,
        "y": 0.4865,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-fib-tools",
     "text": "**Pattern tools (rectangle, cross section, lamella, text …)**",
     "where": "SmartFIB › left toolbar",
     "note": "Pick a tool, then click-drag on the FIB image to draw the pattern.",
     "tags": [
      "pattern",
      "rectangle",
      "cross section",
      "lamella",
      "draw",
      "mill",
      "depo"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5005,
         "y": 0.5463,
         "w": 0.0094,
         "h": 0.4051,
         "label": "Pattern tools"
        }
       ],
       "crop": {
        "x": 0.1791,
        "y": 0.3466,
        "w": 0.6522,
        "h": 0.6534
       }
      }
     ]
    },
    {
     "id": "loc-fib-sidetabs",
     "text": "**Side tabs (Process List · Attributes · Move · Clipping · Offset · Image Capture · Stage · Import)**",
     "where": "SmartFIB › right edge",
     "note": "**Attributes** holds the pattern settings (recipe, depth, geometry); **Process List** runs the queue.",
     "tags": [
      "process list",
      "attributes",
      "image capture",
      "offset",
      "stage",
      "import"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.9887,
         "y": 0.5546,
         "w": 0.0094,
         "h": 0.3528,
         "label": "Side tabs"
        }
       ],
       "crop": {
        "x": 0.432,
        "y": 0.431,
        "w": 0.568,
        "h": 0.569
       }
      }
     ]
    }
   ],
   "tags": [
    "smartfib",
    "fib"
   ]
  },
  {
   "id": "f-mid",
   "group": "Find it",
   "title": "FIB Control · GIS · Airlock",
   "summary": "GIS nozzles, airlock, touch alarm and image rotate/tilt.",
   "steps": [
    {
     "id": "loc-fibctl-tabs",
     "text": "**FIB Control tabs (FIB · Align · GIS 1 · GIS 2 · Options)**",
     "where": "FIB Control panel (top-right window)",
     "note": "**Align** = FIB beam alignment. **GIS 1 / GIS 2** = the gas nozzles (Pt / carbon).",
     "tags": [
      "align",
      "alignment",
      "gis",
      "tabs",
      "fib control"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5166,
         "y": 0.2185,
         "w": 0.0587,
         "h": 0.012,
         "label": "FIB Control tabs"
        }
       ],
       "crop": {
        "x": 0.4359,
        "y": 0.1143,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-gis-main",
     "text": "**GIS 1 — precursor, valve and heaters**",
     "where": "FIB Control › **GIS 1** tab",
     "note": "Shows the precursor on this channel (here **Platinum**), its **Open Valve** box and the Reservoir / Capillary heating boxes.",
     "tags": [
      "gis",
      "platinum",
      "pt",
      "carbon",
      "valve",
      "heater",
      "reservoir",
      "capillary",
      "precursor"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5239,
         "y": 0.2352,
         "w": 0.0759,
         "h": 0.0306,
         "label": "GIS 1 channel"
        }
       ],
       "crop": {
        "x": 0.4518,
        "y": 0.1403,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-gis-nozzle",
     "text": "**Insert Nozzle / Retract Nozzle**",
     "where": "FIB Control › **GIS 1** tab",
     "note": "Insert the nozzle only for the deposition, and **retract it afterwards**.",
     "warn": "Retract the nozzle before tilting or moving the stage.",
     "tags": [
      "nozzle",
      "lance",
      "insert",
      "retract",
      "gis",
      "deposition"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5234,
         "y": 0.3194,
         "w": 0.0364,
         "h": 0.0259,
         "label": "Nozzle"
        }
       ],
       "crop": {
        "x": 0.4316,
        "y": 0.2221,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-airlock-vtS",
     "text": "**Airlock: Transfer · Vent · Store**",
     "where": "Airlock panel",
     "tags": [
      "airlock",
      "transfer",
      "vent",
      "store",
      "load",
      "exchange",
      "sample"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6295,
         "y": 0.3417,
         "w": 0.0499,
         "h": 0.0333,
         "label": "Transfer / Vent / Store"
        }
       ],
       "crop": {
        "x": 0.5444,
        "y": 0.2481,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-airlock-change",
     "text": "**Airlock: Specimen Change · Resume Exchange**",
     "where": "Airlock panel (bottom)",
     "tags": [
      "specimen change",
      "resume",
      "exchange",
      "airlock"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.631,
         "y": 0.4083,
         "w": 0.0483,
         "h": 0.0278,
         "label": "Specimen Change / Resume"
        }
       ],
       "crop": {
        "x": 0.5452,
        "y": 0.312,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-airlock-valve",
     "text": "**Column-chamber (separation) valve**",
     "where": "Airlock panel (top)",
     "note": "Reads *Column Chamber valve = Open / Closed*.",
     "tags": [
      "valve",
      "column",
      "separation",
      "chamber"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6295,
         "y": 0.2824,
         "w": 0.0499,
         "h": 0.0481,
         "label": "Separation valve"
        }
       ],
       "crop": {
        "x": 0.5444,
        "y": 0.1962,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-touch",
     "text": "**Touch Alarm Disable**",
     "where": "Specimen Current Monitor panel",
     "note": "For liftout: **tick Touch Alarm Disable** so the alarm does not trip when the probe touches the sample (V1 guide). The red *Touch alarm not enabled* line confirms it is off.",
     "warn": "Re-enable the alarm when you are finished with the probe.",
     "tags": [
      "touch alarm",
      "specimen current",
      "liftout",
      "omniprobe",
      "contact",
      "monitor"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.6269,
         "y": 0.1472,
         "w": 0.0333,
         "h": 0.0111,
         "label": "Touch Alarm Disable"
        }
       ],
       "crop": {
        "x": 0.5336,
        "y": 0.0425,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-rottilt",
     "text": "**Scan Rotation and Tilt Correction (Rotate / Tilt panel)**",
     "where": "SmartSEM › menu **Scanning › Rotate / Tilt**",
     "note": "This is *image* rotation and tilt (foreshortening) correction — **not** the stage. Tick **Tilt Corr.** and enter the Tilt Angle (double-click the readout). Stage tilt/rotation is on the **Stage** tab.",
     "tags": [
      "rotate",
      "tilt",
      "scan rotation",
      "tilt correction",
      "foreshortening",
      "dyn focus"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.5463,
         "y": 0.063,
         "w": 0.0478,
         "h": 0.1204,
         "label": "Rotate / Tilt"
        }
       ],
       "crop": {
        "x": 0.4402,
        "y": 0,
        "w": 0.26,
        "h": 0.2605
       }
      }
     ]
    },
    {
     "id": "loc-stagenav",
     "text": "**Stage Navigation window (holder map, T/R/M, options)**",
     "where": "Stage Navigation window (right side of the top-right quadrant)",
     "note": "Same X/Y/Z/T/R/M readouts as the Stage tab, plus the sample-holder map and holder selection.",
     "tags": [
      "stage navigation",
      "holder",
      "map",
      "carousel",
      "xyz",
      "tilt",
      "rotation"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.9071,
         "y": 0.2019,
         "w": 0.0551,
         "h": 0.1787,
         "label": "Stage Navigation"
        }
       ],
       "crop": {
        "x": 0.7123,
        "y": 0.1471,
        "w": 0.2877,
        "h": 0.2882
       }
      }
     ]
    }
   ],
   "tags": [
    "gis",
    "airlock",
    "fib control"
   ]
  },
  {
   "id": "f-omni",
   "group": "Find it",
   "title": "OmniProbe",
   "summary": "Probe presets, jog pads, status and E-Stop.",
   "steps": [
    {
     "id": "loc-op-presets",
     "text": "**Probe position presets and Goto**",
     "where": "OmniProbe 400 › right column",
     "note": "Presets: **Retract · Standby · Tip Park · Tip Coincidence · Tip Coincidence High** (+ gripper presets). Select one, press **Goto**.",
     "tags": [
      "preset",
      "goto",
      "retract",
      "standby",
      "tip park",
      "tip coincidence",
      "insert",
      "omniprobe",
      "probe"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.4011,
         "y": 0.1111,
         "w": 0.0408,
         "h": 0.0852,
         "label": "Preset list"
        },
        {
         "k": "box",
         "x": 0.4455,
         "y": 0.1565,
         "w": 0.0224,
         "h": 0.0204,
         "label": "Goto"
        }
       ],
       "crop": {
        "x": 0.3245,
        "y": 0.0435,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-op-jog",
     "text": "**Jog buttons: X/Y and Z/R, speed list**",
     "where": "OmniProbe 400 › center",
     "note": "Left pad = **X/Y**, middle pad = **Z / R** (rotate). The list on the right sets the speed (µm/s) — start slow near the sample.",
     "tags": [
      "jog",
      "move",
      "speed",
      "velocity",
      "x",
      "y",
      "z",
      "rotate",
      "probe",
      "approach"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.2438,
         "y": 0.1435,
         "w": 0.0577,
         "h": 0.0991,
         "label": "X / Y"
        },
        {
         "k": "box",
         "x": 0.3021,
         "y": 0.1435,
         "w": 0.0567,
         "h": 0.0991,
         "label": "Z / R"
        },
        {
         "k": "box",
         "x": 0.3598,
         "y": 0.1657,
         "w": 0.0328,
         "h": 0.0722,
         "label": "Speed"
        }
       ],
       "crop": {
        "x": 0.1545,
        "y": 0.0291,
        "w": 0.3274,
        "h": 0.328
       }
      }
     ]
    },
    {
     "id": "loc-op-estop",
     "text": "**OmniProbe E-Stop**",
     "where": "OmniProbe 400 › under the speed list",
     "tags": [
      "e-stop",
      "emergency",
      "stop",
      "probe"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3624,
         "y": 0.2481,
         "w": 0.0255,
         "h": 0.0185,
         "label": "E-Stop"
        }
       ],
       "crop": {
        "x": 0.2651,
        "y": 0.1471,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-op-status",
     "text": "**Probe status banners**",
     "where": "OmniProbe 400 › right column",
     "note": "**Probe Connected** = software linked to the probe. **Probe Retracted** = probe is parked back.",
     "tags": [
      "status",
      "connected",
      "retracted",
      "probe"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.3972,
         "y": 0.2519,
         "w": 0.0743,
         "h": 0.0898,
         "label": "Status"
        }
       ],
       "crop": {
        "x": 0.3244,
        "y": 0.1866,
        "w": 0.22,
        "h": 0.2204
       }
      }
     ]
    },
    {
     "id": "loc-op-steps",
     "text": "**Step tabs: Acquire Probe Tip · Set Coincidence · Rotation Calibration · Deposit Probe Tip**",
     "where": "OmniProbe 400 › top",
     "tags": [
      "acquire probe tip",
      "coincidence",
      "rotation calibration",
      "deposit probe tip",
      "workflow"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.1768,
         "y": 0.063,
         "w": 0.1227,
         "h": 0.0528,
         "label": "Workflow tabs"
        }
       ],
       "crop": {
        "x": 0.1032,
        "y": 0,
        "w": 0.2699,
        "h": 0.2704
       }
      }
     ]
    },
    {
     "id": "loc-op-readout",
     "text": "**Probe position readouts (X · Y · Z · R)**",
     "where": "OmniProbe 400 › under the jog pads",
     "tags": [
      "position",
      "readout",
      "x",
      "y",
      "z",
      "r"
     ],
     "media": [
      {
       "type": "image",
       "src": "img/workstation.jpg",
       "w": 3847,
       "h": 2160,
       "marks": [
        {
         "k": "box",
         "x": 0.2438,
         "y": 0.2481,
         "w": 0.1159,
         "h": 0.0185,
         "label": "Position"
        }
       ],
       "crop": {
        "x": 0.1743,
        "y": 0.1296,
        "w": 0.255,
        "h": 0.2554
       }
      }
     ]
    }
   ],
   "tags": [
    "omniprobe",
    "probe"
   ]
  }
 ]
};
