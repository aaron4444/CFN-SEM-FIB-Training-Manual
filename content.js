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
     "text": "**Sample is in the chamber:** press `Exchange`. The stage comes down to the exchange position and the interlock door opens.",
     "where": "Keyboard panel · SmartSEM toolbar",
     "media": [
      {
       "type": "image",
       "src": "img/exchange-keyboard.jpg",
       "w": 1536,
       "h": 2040,
       "alt": "Exchange key on the keyboard panel"
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
       "src": "img/keyboard-camera.jpg",
       "w": 699,
       "h": 527
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
     "text": "Insert the sample with the rod, **retract the rod**, then press `Store`.",
     "media": [
      {
       "type": "image",
       "src": "img/loadlock-photos.png",
       "w": 232,
       "h": 436
      },
      {
       "type": "image",
       "src": "img/airlock-store.png",
       "w": 221,
       "h": 553
      },
      {
       "type": "image",
       "src": "img/loadlock-hw.jpg",
       "w": 453,
       "h": 381
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
       "h": 527
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
       "src": "img/sem-stage-screen.png",
       "w": 1918,
       "h": 1014
      },
      {
       "type": "image",
       "src": "img/sem-stage-tab.png",
       "w": 291,
       "h": 714
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
     "id": "sem-4",
     "text": "Press the **Camera** button on the SEM keyboard panel.",
     "media": [
      {
       "type": "image",
       "src": "img/keyboard-camera.jpg",
       "w": 699,
       "h": 527
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
         "label": "WD 5.2"
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
   "title": "SEM imaging",
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
     "text": "Bring the sample to **WD 5 mm**.",
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
     ]
    },
    {
     "id": "eds-3",
     "text": "**Insert the EDS spectrometer.**",
     "media": [
      {
       "type": "image",
       "src": "img/aztec-layout.png",
       "w": 3847,
       "h": 2181
      }
     ]
    },
    {
     "id": "eds-4",
     "text": "Turn off the SmartSEM cameras by toggling to a different view."
    },
    {
     "id": "eds-5",
     "text": "When finished: **retract the spectrometer** and close the software.",
     "warn": "Always retract the detector before moving the stage."
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
     ]
    },
    {
     "id": "fp-2",
     "text": "Turn on the FIB, open the column valve, and make sure the probe is the **50 pA reference**.",
     "where": "SmartFIB › Image Capture › Probe",
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
         "label": "30kV:50pA ref"
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
      }
     ]
    },
    {
     "id": "fp-7",
     "text": "On the **FIB** tab, **open** the gun valve.",
     "where": "SmartSEM control panel › Gun / FIB"
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
         "label": "F8 = FIB"
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
       "src": "img/smartfib-open.png",
       "w": 640,
       "h": 331
      },
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
     "note": "Use **3** before patterning.",
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
   "id": "p-fibmill",
   "group": "Procedures",
   "title": "FIB milling and patterning",
   "summary": "Draw a pattern, choose the recipe, run it.",
   "steps": [
    {
     "id": "fm-1",
     "text": "Make sure **eucentric** and **coincidence** are set and you have a slow-scan (3) FIB image.",
     "note": "See *FIB preparation* and *FIB imaging*."
    },
    {
     "id": "fm-2",
     "text": "Draw the pattern (**cut** or **Pt depo**) over the feature.",
     "where": "SmartFIB › left toolbar",
     "media": [
      {
       "type": "image",
       "src": "img/fib-cross-section.png",
       "w": 891,
       "h": 890,
       "alt": "Green cross-section pattern over the sample"
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
     "hint": "Clip idea: pick the cross-section tool, drag a pattern, open Attributes, pick a recipe."
    },
    {
     "id": "fm-3",
     "text": "Open **Attributes** and pick the recipe / depth. Example recipe in the V1 guide: *Cross Section 30 kV 3 nA*.",
     "where": "SmartFIB › Attributes tab",
     "media": [
      {
       "type": "image",
       "src": "img/fib-recipe.png",
       "w": 467,
       "h": 348
      }
     ]
    },
    {
     "id": "fm-4",
     "text": "**Liftout only:** turn off the touch alarm on the Specimen Current Monitor.",
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
   "id": "p-fibalign",
   "group": "Procedures",
   "title": "FIB alignment",
   "summary": "FIB Control › Align tab.",
   "steps": [
    {
     "id": "fa-1",
     "text": "Open **FIB Control › Align**. The V1 guide circles **Beam Shift Cor**, **Save** and **Spot**.",
     "where": "FIB Control › Align tab",
     "media": [
      {
       "type": "image",
       "src": "img/fib-align.png",
       "w": 381,
       "h": 603
      },
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
         "label": "Align tab"
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
     "status": "draft",
     "hint": "Clip idea: the full FIB alignment run (aperture, beam shift, stigmation) with the cursor highlighted."
    }
   ],
   "tags": [
    "align",
    "alignment",
    "beam shift",
    "stigmation"
   ],
   "status": "draft"
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
   "id": "p-gas",
   "group": "Procedures",
   "title": "GIS outgassing",
   "summary": "Do this when a precursor reservoir has not been opened for a while.",
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
     "note": "Close the Outgassing panel afterwards — while it is open, the other SmartSEM panels are disabled."
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
   "title": "Cleaning the OmniProbe tip",
   "summary": "Re-shape a dirty probe tip with the FIB.",
   "steps": [
    {
     "id": "oc-1",
     "text": "Image the probe tip in the FIB and place a **cut pattern** across the end of the tip, as in the V1 guide pictures.",
     "media": [
      {
       "type": "image",
       "src": "img/omni-tip-clean.png",
       "w": 767,
       "h": 520
      },
      {
       "type": "image",
       "src": "img/omni-tip-recipe.png",
       "w": 530,
       "h": 459
      }
     ],
     "status": "draft",
     "hint": "Clip idea: probe to Tip Coincidence, FIB image of the tip, draw the pattern, mill, retract."
    }
   ],
   "tags": [
    "omniprobe",
    "tip",
    "clean",
    "probe"
   ],
   "status": "draft"
  },
  {
   "id": "p-serial",
   "group": "Procedures",
   "title": "Serial imaging",
   "summary": "Dual SEM/FIB serial imaging (slice and view).",
   "steps": [
    {
     "id": "sv-0",
     "text": "**Sample prep is critical** — platinum alone typically does not stabilise the sample enough."
    },
    {
     "id": "sv-1",
     "text": "Dual-scan imaging is possible. Set the SEM **B/C** and imaging settings **before** pressing Start."
    },
    {
     "id": "sv-2",
     "text": "Suggest setting up the FIB view condition at the mill definition before starting the mill."
    },
    {
     "id": "sv-3",
     "text": "You can pause to **beam-shift** the sample: at the first pause, answer **Yes** when it asks about the hard panel, then beam-shift from the **Control** tab."
    },
    {
     "id": "sv-4",
     "text": "You should hear a lot of clicking as it switches between the SEM and the FIB."
    },
    {
     "id": "sv-5",
     "text": "**During a pause:** wait for the pause state → answer **Yes** to the hard panel → you may change **Focus, Stig, Noise Reduction, B/C** → press **Continue**.",
     "warn": "DO NOT change MAG or STORE RESOLUTION."
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
    "liftout",
    "platinum",
    "pt",
    "protect",
    "deposition"
   ],
   "status": "draft"
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
   "widget": {
    "type": "undercut",
    "angle": 54
   },
   "tags": [
    "liftout",
    "undercut",
    "j-cut",
    "u-cut",
    "tab"
   ],
   "status": "draft"
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
         "x": 0.0,
         "y": 0.0,
         "w": 0.4995,
         "h": 0.4995,
         "label": "OmniProbe 400",
         "pos": "in"
        },
        {
         "k": "box",
         "x": 0.5005,
         "y": 0.0,
         "w": 0.4995,
         "h": 0.4995,
         "label": "FIB Control · Airlock · Stage Nav",
         "pos": "in"
        },
        {
         "k": "box",
         "x": 0.0,
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
