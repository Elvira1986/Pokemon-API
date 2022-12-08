// Credit: Pokemon data accessed from here: https://github.com/lucasbento/graphql-pokemon

module.exports = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "classification": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weight": {
      "minimum": "6.04kg",
      "maximum": "7.76kg"
    },
    "height": {
      "minimum": "0.61m",
      "maximum": "0.79m"
    },
    "fleeRate": 0.1,
    "evolutionRequirements": {
      "amount": 25,
      "name": "Bulbasaur candies"
    },
    "evolutions": [
      {
        "id": 2,
        "name": "Ivysaur"
      },
      {
        "id": 3,
        "name": "Venusaur"
      }
    ],
    "maxCP": 951,
    "maxHP": 1071,
    "attacks": {
      "fast": [
        {
          "name": "Tackle",
          "type": "Normal",
          "damage": 12
        },
        {
          "name": "Vine Whip",
          "type": "Grass",
          "damage": 7
        }
      ],
      "special": [
        {
          "name": "Power Whip",
          "type": "Grass",
          "damage": 70
        },
        {
          "name": "Seed Bomb",
          "type": "Grass",
          "damage": 40
        },
        {
          "name": "Sludge Bomb",
          "type": "Poison",
          "damage": 55
        }
      ]
    }
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "classification": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weight": {
      "minimum": "11.38kg",
      "maximum": "14.63kg"
    },
    "height": {
      "minimum": "0.88m",
      "maximum": "1.13m"
    },
    "fleeRate": 0.07,
    "Previous evolution(s)": [
      {
        "id": 1,
        "name": "Bulbasaur"
      }
    ],
    "evolutionRequirements": {
      "amount": 100,
      "name": "Bulbasaur candies"
    },
    "evolutions": [
      {
        "id": 3,
        "name": "Venusaur"
      }
    ],
    "maxCP": 1483,
    "maxHP": 1632,
    "attacks": {
      "fast": [
        {
          "name": "Razor Leaf",
          "type": "Grass",
          "damage": 15
        },
        {
          "name": "Vine Whip",
          "type": "Grass",
          "damage": 7
        }
      ],
      "special": [
        {
          "name": "Power Whip",
          "type": "Grass",
          "damage": 70
        },
        {
          "name": "Sludge Bomb",
          "type": "Poison",
          "damage": 55
        },
        {
          "name": "Solar Beam",
          "type": "Grass",
          "damage": 120
        }
      ]
    }
  },
  {
    "id": 3,
    "name": "Venusaur",
    "classification": "Seed Pokémon",
    "types": [
      "Grass",
      "Poison"
    ],
    "resistant": [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ],
    "weaknesses": [
      "Fire",
      "Ice",
      "Flying",
      "Psychic"
    ],
    "weight": {
      "minimum": "87.5kg",
      "maximum": "112.5kg"
    },
    "height": {
      "minimum": "1.75m",
      "maximum": "2.25m"
    },
    "fleeRate": 0.05,
    "Previous evolution(s)": [
      {
        "id": 1,
        "name": "Bulbasaur"
      },
      {
        "id": 2,
        "name": "Ivysaur"
      }
    ],
    "maxCP": 2392,
    "maxHP": 2580,
    "attacks": {
      "fast": [
        {
          "name": "Razor Leaf",
          "type": "Grass",
          "damage": 15
        },
        {
          "name": "Vine Whip",
          "type": "Grass",
          "damage": 7
        }
      ],
      "special": [
        {
          "name": "Petal Blizzard",
          "type": "Grass",
          "damage": 65
        },
        {
          "name": "Sludge Bomb",
          "type": "Poison",
          "damage": 55
        },
        {
          "name": "Solar Beam",
          "type": "Grass",
          "damage": 120
        }
      ]
    }
  },
  {
    "id": 4,
    "name": "Charmander",
    "classification": "Lizard Pokémon",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": {
      "minimum": "7.44kg",
      "maximum": "9.56kg"
    },
    "height": {
      "minimum": "0.53m",
      "maximum": "0.68m"
    },
    "fleeRate": 0.1,
    "evolutionRequirements": {
      "amount": 25,
      "name": "Charmander candies"
    },
    "evolutions": [
      {
        "id": 5,
        "name": "Charmeleon"
      },
      {
        "id": 6,
        "name": "Charizard"
      }
    ],
    "maxCP": 841,
    "maxHP": 955,
    "attacks": {
      "fast": [
        {
          "name": "Ember",
          "type": "Fire",
          "damage": 10
        },
        {
          "name": "Scratch",
          "type": "Normal",
          "damage": 6
        }
      ],
      "special": [
        {
          "name": "Flame Burst",
          "type": "Fire",
          "damage": 30
        },
        {
          "name": "Flame Charge",
          "type": "Fire",
          "damage": 25
        },
        {
          "name": "Flamethrower",
          "type": "Fire",
          "damage": 55
        }
      ]
    }
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "classification": "Flame Pokémon",
    "types": [
      "Fire"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Ice",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Ground",
      "Rock"
    ],
    "weight": {
      "minimum": "16.63kg",
      "maximum": "21.38kg"
    },
    "height": {
      "minimum": "0.96m",
      "maximum": "1.24m"
    },
    "fleeRate": 0.07,
    "Previous evolution(s)": [
      {
        "id": 4,
        "name": "Charmander"
      }
    ],
    "evolutionRequirements": {
      "amount": 100,
      "name": "Charmander candies"
    },
    "evolutions": [
      {
        "id": 6,
        "name": "Charizard"
      }
    ],
    "maxCP": 1411,
    "maxHP": 1557,
    "attacks": {
      "fast": [
        {
          "name": "Ember",
          "type": "Fire",
          "damage": 10
        },
        {
          "name": "Scratch",
          "type": "Normal",
          "damage": 6
        }
      ],
      "special": [
        {
          "name": "Fire Punch",
          "type": "Fire",
          "damage": 40
        },
        {
          "name": "Flame Burst",
          "type": "Fire",
          "damage": 30
        },
        {
          "name": "Flamethrower",
          "type": "Fire",
          "damage": 55
        }
      ]
    }
  },
  {
    "id": 6,
    "name": "Charizard",
    "classification": "Flame Pokémon",
    "types": [
      "Fire",
      "Flying"
    ],
    "resistant": [
      "Fire",
      "Grass",
      "Fighting",
      "Bug",
      "Steel",
      "Fairy"
    ],
    "weaknesses": [
      "Water",
      "Electric",
      "Rock"
    ],
    "weight": {
      "minimum": "79.19kg",
      "maximum": "101.81kg"
    },
    "height": {
      "minimum": "1.49m",
      "maximum": "1.91m"
    },
    "fleeRate": 0.05,
    "Previous evolution(s)": [
      {
        "id": 4,
        "name": "Charmander"
      },
      {
        "id": 5,
        "name": "Charmeleon"
      }
    ],
    "maxCP": 2413,
    "maxHP": 2602,
    "attacks": {
      "fast": [
        {
          "name": "Ember",
          "type": "Fire",
          "damage": 10
        },
        {
          "name": "Wing Attack",
          "type": "Flying",
          "damage": 9
        }
      ],
      "special": [
        {
          "name": "Dragon Claw",
          "type": "Dragon",
          "damage": 35
        },
        {
          "name": "Fire Blast",
          "type": "Fire",
          "damage": 100
        },
        {
          "name": "Flamethrower",
          "type": "Fire",
          "damage": 55
        }
      ]
    }
  },
  {
    "id": 7,
    "name": "Squirtle",
    "classification": "Tiny Turtle Pokémon",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weight": {
      "minimum": "7.88kg",
      "maximum": "10.13kg"
    },
    "height": {
      "minimum": "0.44m",
      "maximum": "0.56m"
    },
    "fleeRate": 0.1,
    "evolutionRequirements": {
      "amount": 25,
      "name": "Squirtle candies"
    },
    "evolutions": [
      {
        "id": 8,
        "name": "Wartortle"
      },
      {
        "id": 9,
        "name": "Blastoise"
      }
    ],
    "maxCP": 891,
    "maxHP": 1008,
    "attacks": {
      "fast": [
        {
          "name": "Bubble",
          "type": "Water",
          "damage": 25
        },
        {
          "name": "Tackle",
          "type": "Normal",
          "damage": 12
        }
      ],
      "special": [
        {
          "name": "Aqua Jet",
          "type": "Water",
          "damage": 25
        },
        {
          "name": "Aqua Tail",
          "type": "Water",
          "damage": 45
        },
        {
          "name": "Water Pulse",
          "type": "Water",
          "damage": 35
        }
      ]
    }
  },
  {
    "id": 8,
    "name": "Wartortle",
    "classification": "Turtle Pokémon",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weight": {
      "minimum": "19.69kg",
      "maximum": "25.31kg"
    },
    "height": {
      "minimum": "0.88m",
      "maximum": "1.13m"
    },
    "fleeRate": 0.07,
    "Previous evolution(s)": [
      {
        "id": 7,
        "name": "Squirtle"
      }
    ],
    "evolutionRequirements": {
      "amount": 100,
      "name": "Squirtle candies"
    },
    "evolutions": [
      {
        "id": 9,
        "name": "Blastoise"
      }
    ],
    "maxCP": 1435,
    "maxHP": 1582,
    "attacks": {
      "fast": [
        {
          "name": "Bite",
          "type": "Dark",
          "damage": 6
        },
        {
          "name": "Water Gun",
          "type": "Water",
          "damage": 6
        }
      ],
      "special": [
        {
          "name": "Aqua Jet",
          "type": "Water",
          "damage": 25
        },
        {
          "name": "Gunk Shot",
          "type": "Poison",
          "damage": 65
        },
        {
          "name": "Hydro Pump",
          "type": "Water",
          "damage": 90
        },
        {
          "name": "Ice Beam",
          "type": "Ice",
          "damage": 65
        }
      ]
    }
  },
  {
    "id": 9,
    "name": "Blastoise",
    "classification": "Shellfish Pokémon",
    "types": [
      "Water"
    ],
    "resistant": [
      "Fire",
      "Water",
      "Ice",
      "Steel"
    ],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "weight": {
      "minimum": "74.81kg",
      "maximum": "96.19kg"
    },
    "height": {
      "minimum": "1.4m",
      "maximum": "1.8m"
    },
    "fleeRate": 0.05,
    "Previous evolution(s)": [
      {
        "id": 7,
        "name": "Squirtle"
      },
      {
        "id": 8,
        "name": "Wartortle"
      }
    ],
    "maxCP": 2355,
    "maxHP": 2542,
    "attacks": {
      "fast": [
        {
          "name": "Bite",
          "type": "Dark",
          "damage": 6
        },
        {
          "name": "Water Gun",
          "type": "Water",
          "damage": 6
        }
      ],
      "special": [
        {
          "name": "Flash Cannon",
          "type": "Steel",
          "damage": 60
        },
        {
          "name": "Gunk Shot",
          "type": "Poison",
          "damage": 65
        },
        {
          "name": "Hydro Pump",
          "type": "Water",
          "damage": 90
        },
        {
          "name": "Ice Beam",
          "type": "Ice",
          "damage": 65
        }
      ]
    }
  },
  {
    "id": 10,
    "name": "Caterpie",
    "classification": "Worm Pokémon",
    "types": [
      "Bug"
    ],
    "resistant": [
      "Grass",
      "Fighting",
      "Ground"
    ],
    "weaknesses": [
      "Fire",
      "Flying",
      "Rock"
    ],
    "weight": {
      "minimum": "2.54kg",
      "maximum": "3.26kg"
    },
    "height": {
      "minimum": "0.26m",
      "maximum": "0.34m"
    },
    "fleeRate": 0.2,
    "evolutionRequirements": {
      "amount": 12,
      "name": "Caterpie candies"
    },
    "evolutions": [
      {
        "id": 11,
        "name": "Metapod"
      },
      {
        "id": 12,
        "name": "Butterfree"
      }
    ],
    "maxCP": 367,
    "maxHP": 443,
    "attacks": {
      "fast": [
        {
          "name": "Bug Bite",
          "type": "Bug",
          "damage": 5
        },
        {
          "name": "Tackle",
          "type": "Normal",
          "damage": 12
        }
      ],
      "special": [
        {
          "name": "Struggle",
          "type": "Normal",
          "damage": 15
        }
      ]
    }
  }
];
