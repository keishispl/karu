const EDITIONS = [
  {
    "title": "Updates",
    "description": "The Minecraft server thats cool and stuff!",
    "firstMessage": "Server Creation",
    "logo": "logo_java.png",

    "versions": [
      {
        "title": "Server Creation",
        "type": "event",
        "date": "2024-04-21",
        "icon": "events/server_creation.png",
        "longDescription": [
          "On April 21st 2024, the server was created.",
          "Back then, there was nothing new, only vanilla. Bare bones."
        ]
      },
      {
        "title": "The Hunting Update",
        "subtitle": "1.1.0",
        "type": "major",
        "date": "2024-05-12",
        "icon": "updates/main/1.1.0.png",
        "funFact": "Did you know? This update's name was just random. Kacey just has no creativity on names",
        "mainFeatures": [
          { "text": "Custom Crafting Table" },
          { "text": "Beheading Enchantment & Dust" }
        ],
        "minorFeatures": [
          { "text": "Warden Shard" },
          { "text": "Toolboxes" },
          { "text": "Knife" },
          { "text": "Hoglins drop Lard instead of Leather" },
          { "text": "Lard crafted into Candles" }
        ]
      },
      {
        "subtitle": "1.1.1 - 1.1.4c",
        "type": "minor",
        "date": "2024-05-13",
        "mainFeatures": [
          { "text": "Disable Fireworks Elytra Boosting" },
          { "text": "Grappling Hook Costs More while Gliding" },
          { "text": "Slower Mana Regeneration while Gliding" },
          { "text": "Mails" },
          { "text": "Fixed Bugs" },
          { "text": "Achievement Guide" }
        ],
        "minorFeatures": [
          { "text": "Adjusted Beheading Dust Costs" },
          { "text": "Discord Connection" },
          { "text": "Added Storage to Toolbox" },
          { "text": "Go Back to Toolbox Button for Some GUIs Accessed From Toolbox" },
          { "text": "Closing Storage/Ender Chest from Toolbox will always reopen Toolbox menu" },
          { "text": "Mana Bar will show Item Cooldown if Item has Cooldown" }
        ]
      },
      {
        "subtitle": "1.1.5 - 1.1.5b",
        "type": "minor",
        "date": "2024-05-18",
        "mainFeatures": [
          { "text": "Wool Brushing into Dye" }
        ],
        "minorFeatures": [
          { "text": "Dispensing Bone Meal Near Flowers will Spread those Flowers" }
        ]
      },





      {
        "title": "Mining Made Easier!",
        "subtitle": "1.2.0",
        "type": "major",
        "date": "2024-05-20",
        "icon": "updates/main/1.2.0.png",
        "funFact": "Did you know? This update was created because Kacey thinks mining is boring and is a waste of time",
        "mainFeatures": [
          { "text": "Lumberjack & Chunkmine Scroll" },
          { "text": "Drag-and-Drop Enchanting System" }
        ],
        "minorFeatures": [,
          { "text": "4 New Enchantments (1.2.0b & 1.2.1)" }
        ]
      },
      {
        "subtitle": "1.2.1 - 1.2.1e",
        "type": "minor",
        "date": "2024-05-25",
        "mainFeatures": [
          { "text": "Bleeding" }
        ],
        "minorFeatures": [
          { "text": "Toggable Lumberjack & Chunkmine Enchantment" },
          { "text": "Custom Death Messages" },
          { "text": "Rounding Health in Action Bar & Scoreboard" },
          { "text": "Fixed Whitelist" }
        ]
      },
      {
        "subtitle": "1.2.1f - 1.2.1h",
        "type": "minor",
        "date": "2024-06-09",
        "mainFeatures": [
          { "text": "Wool Brushing into Dye" }
        ],
        "minorFeatures": [
          { "text": "Action Bar & Scoreboard will Refresh More Frequently" },
          { "text": "Standing on Stonecutter/Heated Cauldron will Damage you" }
        ]
      },
      {
        "subtitle": "1.2.1f - 1.2.2",
        "type": "minor",
        "date": "2024-06-15",
        "mainFeatures": [
          { "text": "Wool Brushing into Dye" },
          { "text": "Discord Slash Commands" },
          { "text": "Discord Linking" },
          { "text": "Sorted Internal Code" }
        ],
        "minorFeatures": [
          { "text": "Action Bar & Scoreboard will Refresh More Frequently" },
          { "text": "Standing on Stonecutter/Heated Cauldron will Damage you" }
        ]
      },
      {
        "title": "Server hosted by BulzyKrown",
        "type": "event",
        "date": "2024-06-19",
        "icon": "events/bulzykrown_server_host.gif",
        "longDescription": [
          "On June 19th 2024, the servers are now hosted by the one and truly BulzyKrown. (Thank you!)",
          "Although during transitioning a lot of things broke, but after than we were able to be up and running!",
          "This is great for the future of the server as the server will no longer lag as much as before and will provide a better gaming experience."
        ]
      },
      {
        "subtitle": "1.3.0 Experimental Update I - III b",
        "type": "minor",
        "date": "2024-06-30",
        "mainFeatures": [
          { "text": "Upgrades" },
          { "text": "Bow Laser" },
          { "text": "Custom Damage Knockback" },
          { "text": "Cleaned Up Scoreboard & Action Bar" }
        ],
        "minorFeatures": [
          { "text": "Changed Getting Karu Achievement Screen" },
          { "text": "Custom Heart Colors" },
          { "text": "Sneak Under Berries" },
          { "text": "Craftable Tall Grass & Large Ferns" }
        ]
      },
      {
        "subtitle": "1.3.0 Experimental Update IV - VIII b",
        "type": "minor",
        "date": "2024-07-04",
        "mainFeatures": [
          { "text": "Combat/Crafting/Mining/Foraging Skill" },
          { "text": "Removed Action Bar" },
          { "text": "Main Menu (to Replace Toolbox)" },
          { "text": "Skills Menu" },
          { "text": "Custom Recipe Viewer" }
        ],
        "minorFeatures": [
          { "text": "Stronger Monsters" },
          { "text": "Fixed Bugs" },
          { "text": "Removed Custom Heart Colors" },
          { "text": "Inferno Wand (to Replace Flamethrower)" },
          { "text": "Enchantment Artifacts" },
          { "text": "Dragon Shard" }
        ]
      },
      {
        "subtitle": "1.3.0 Experimental Update IX",
        "type": "minor",
        "date": "2024-07-06",
        "mainFeatures": [
          { "text": "Usable Artifacts" },
          { "text": "Drill Base, Stone Compound & Compacted Coal" },
          { "text": "D-125" },
          { "text": "Drill upgrades menu now exist (USAGE COMING SOON)" },
          { "text": "Drill enchantments menu now exist (works too unlike the upgrades menu)" }
        ],
        "minorFeatures": [
          { "text": "Drills will only work for blocks that are meant to be mined by a pickaxe" },
          { "text": "To open the drill options menu, right click the drill" }
        ]
      }
    ],

    "upcomings": [
      {
        "title": "Skills Progression",
        "subtitle": "1.3.0",
        "type": "major",
        "possibleDate": "Mid 2024 - Late 2024",
        "icon": "updates/main/1.3.0.png",
        "funFact": "Did you know? This update is one of the largest updates and the first update to have experimental updates!",
        "mainFeatures": [
          { "text": "Menu GUI" },
          { "text": "Skill Progression" },
          { "text": "Custom Items & Tiers" },
          { "text": "Code Revamp" },
          { "text": "More Unknown Features" }
        ]
      },
      {
        "title": "Food Update",
        "subtitle": "1.4.0",
        "type": "major",
        "possibleDate": "Late 2024 - Early 2025 (???)",
        "icon": "updates/main/1.4.0.png",
        "funFact": "Did you know? This update was delayed because the server wasn't updated to 1.21 yet.",
        "mainFeatures": [
          { "text": "New Food Cooking Method" },
          { "text": "More Unannounced Features" }
        ]
      },
    ]
  },

  {
    "title": "Wiki",
    "description": "The useful wiki page",
    "firstMessage": "The Wiki is born",
    "logo": "logo_bedrock.png",

    "versions": [],

    "upcomings": []
  },

  {
    "title": "Resource Pack",
    "description": "The custom resource pack",
    "firstMessage": "The Wiki is born",
    "logo": "logo_console.png",

    "versions": [],

    "upcomings": []
  }
]