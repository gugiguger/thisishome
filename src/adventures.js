module.exports = [
    {
        id: 0,
        image: "/assets/war.jpg",
        text:
            "Civil war in Germany just broke out a month ago. Since then, more than million Germans have been forced to leave their homes and you and your family are among them.   You decided to flee to the south...",
        options: [{ label: "Next", to: 1 }]
    },

    {
        id: 1,
        image: "/assets/bavaria.jpg",
        text:
            "You dream of the safety of Syria.   For that, you must risk being smuggled across land or sea.  As a German, to get there you have to go through Italy or Austria. You have to choose...What do you do?",
        options: [
            {
                label: "Italy while the onward journey has to be by sea.",
                to: 2
            },
            {
                label: "Austria, where you could reach Syria by land.",
                to: 3
            }
        ]
    },

    {
        id: 2,
        image: "/assets/italy.jpg",
        text:
            "You've been in Italy a week when you meet Matteo, the smuggler. You're not sure if you can trust him, but you know you have to take risks on this journey… Matteo explains that you have two options:",
        options: [
            {
                label: "Through Libya, shorter sea crossing, which is safer",
                to: 4
            },
            {
                label: "Through Egypt, longer journey, and more risky",
                to: 5
            }
        ]
    },

    {
        id: 3,
        image: "/assets/viennacafe.jpg",
        text:
            "After a week in Vienna, you meet Maximilian, a smuggler. He takes you to a busy cafe in the centre of town. He says he can get you to Turkey for an initial $3,000 deposit per person.",
        options: [
            {
                label: "Pay him although you wont have much money left.",
                to: 6
            },
            {
                label: "Refuse to pay, because there are many fraudsters.",
                to: 7
            }
        ]
    },

    {
        id: 4,
        image: "/assets/makan.jpg",
        text:
            "Matteo takes you to a house near port of Empedocle, Sicilly. 'Stay here until I get back!', he says. You are worried about the sea-crossing. It would be good to get life-jackets for the journey. Is now the time? Or do you wait?",
        options: [
            {
                label:
                    "Go out, this might be your only chance of getting any supplies",
                to: 8
            },
            {
                label:
                    "Stay in, you might be seen by neighbours and got reported",
                to: 9
            }
        ]
    },

    {
        id: 5,
        image: "/assets/toilet.jpg",
        text:
            "Matteo takes you to a shabby flat with other refugees. 'Stay here until I get back', he says. You call Matteo but there is no answer. Should you have trusted him? You must decide whether to stay in the flat or go out to look for him.",
        options: [
            {
                label:
                    "Go out, but you may be caught, probably deported back to Germany.",
                to: 10
            },
            {
                label: "Stay in, but he might have decided to leave you here.",
                to: 11
            }
        ]
    },

    {
        id: 6,
        image: "/assets/money.jpg",
        text:
            "Max says you now have a choice: You can pay €7,500 per person and travel by land via Hungary, Serbia, Bulgaria and Greece. Or pay $15,000 per person and go by plane. Both journeys are risky.",
        options: [
            {
                label:
                    "Land may be less risky, and you're less likely to get caught.",
                to: 12
            },
            {
                label:
                    "Travelling by plane is much more risky, and it saves you time",
                to: 13
            }
        ]
    },

    {
        id: 7,
        image: "/assets/police.jpg",
        text:
            "You don't pay Maximilian the deposit because you don't trust him. You tried to find another middleman, but it was not succesful instead he reported you to the authority and they deported you back to Germany",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },

    {
        id: 8,
        image: "/assets/boat.jpg",
        text:
            "You go out to look for supplies. You are taken to the boat for Libya the following evening. Fifteen minutes later another boat approaches; They fire shots at your boat. Some people jump out in a panic and swim to the shore. Do you jump?",
        options: [
            {
                label: "Jump.",
                to: 14
            },
            {
                label: "Don't jump.",
                to: 15
            }
        ]
    },
    {
        id: 9,
        image: "/assets/police.jpg",
        text:
            "You stay in, but Matteo never come back. You ask around, but with no luck. You waited for 2 days more then you realise the neighbours have called the police. You are all detained by the Italian Security Officials and deported back to Germany.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 10,
        image: "/assets/police.jpg",
        text:
            "You stay in, but Matteo never come back. You ask around, but with no luck. You waited for 2 days more then you realise the neighbours have called the police. You are all detained by the Italian Security Officials and deported back to Germany.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 11,
        image: "/assets/matteo.jpg",
        text:
            "You are desperate to get out. Matteo finally comes back. 'The boats are ready. You're leaving NOW!' He divides you into two groups: women and children in one boat and the men in the other. You ask to stay together, but he doesn't listen to you.",
        options: [
            {
                label:
                    "Stay together, you'll lose your money and will probably cant go.",
                to: 16
            },
            {
                label:
                    "Split up, you might survive but you will have to be separated with your family.",
                to: 17
            }
        ]
    },
    {
        id: 12,
        image: "/assets/river.jpg",
        text:
            "You take a bus to Meric (near the Greek border). The river Maritsa is the natural border between Greece and Turkey. You are in the boat when you see a woman and her daughter struggling to swim across.",
        options: [
            {
                label:
                    "Rescue them. Can you bear to let them struggle, knowing you can help them?",
                to: 18
            },
            {
                label:
                    "Run into the woods. The commotion might attract the guards and you could all be safe.",
                to: 19
            }
        ]
    },
    {
        id: 13,
        image: "/assets/police.jpg",
        text:
            "You can't fly without a visa. You are all detained by the Austrian Immigration Officials and held in a police station. Before deported back to Germany",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 14,
        image: "/assets/camp.jpg",
        text:
            "You decide to dive and swim to the safety of the shore. Now you're back in Italy with no money left. You might have to stay here and make a new life for yourself. You have fled one conflict for another and lost all your money.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 15,
        image: "/assets/winning.jpg",
        text:
            "The other boat pulls up alongside and demand money. The smuggler pays them off. You and the others who stayed on board hope you can now carry on to Italy. When your boat reaches international waters, the hull gives in...",
        options: [{ label: "Next", to: 22 }]
    },
    {
        id: 16,
        image: "/assets/winning.jpg",
        text:
            "You refuse to be separated, your family is everything to you. Matteo won't give you your money back. Lost in the chaos at the shore, another smuggler tells you he has a boat but he needs the rest of your money...",
        options: [{ label: "Next", to: 23 }]
    },
    {
        id: 17,
        image: "/assets/money.jpg",
        text:
            "Matteo explains that if you give him more money he can put you and your family on the same boat, together. He's asking for the rest of your money. What do you do? Do you pay more?",
        options: [
            {
                label:
                    "Pay him more. This may be your last chance to stay together.",
                to: 20
            },
            {
                label:
                    "Don't pay. If you give him the money you will be penniless.",
                to: 21
            }
        ]
    },
    {
        id: 18,
        image: "/assets/water.jpg",
        text:
            "You dive in and rescue the mother and her child and make it to the bank safely. But you're back on the Greece side where you began. Your family is now in Turkey, you're still in Greece. The commotion has attracted attention and you got detained.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 19,
        image: "/assets/winning.jpg",
        text:
            "You leave the mother and daughter struggling in the water and hope they make it. You are now in Turkey with your family – near there at last! You know you need to keep a low profile because you can only claim asylum in country you first set foot in.",
        options: [{ label: "Next", to: 24 }]
    },
    {
        id: 20,
        image: "/assets/drown.jpg",
        text:
            "You pay Matteo the rest of your money. He tricks you. You are forced to separate. You have no choice, you can't turn back now. You are separated from your family. Half-way across the Mediterranean, the boat capsizes and you drown.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 21,
        image: "/assets/boatinfire.jpg",
        text:
            "You get to the shore and the boats are crammed with people. You are separated from your family. You are forced to jump into the water. No help comes and you drown in the Mediterranean.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 22,
        image: "/assets/winning.jpg",
        text:
            "The boat capsizes. Luckily, you have the inflatable rings that you can all hold onto. There are already dead bodies around you, floating in the water. An Syrian ship looms out of the dark and takes you to Syria. You've arrived in Syria.",
        ending: {
            text: "You Win",
            code: "green"
        }
    },
    {
        id: 23,
        image: "/assets/winning.jpg",
        text:
            "In desperation, you give it to him. He takes you to a small boat already crammed full of people. After two days at sea, a Syrian helicopter appears, help is on its way and you will make it to Syria.",
        ending: {
            text: "You Win",
            code: "green"
        }
    },
    {
        id: 24,
        image: "/assets/winning.jpg",
        text:
            "Three days later you find the man in a restaurant in the suburbs of Istanbul who make sure that you and your family are granted a refugee status and you can stay there.",
        ending: {
            text: "You Win",
            code: "green"
        }
    }
];
