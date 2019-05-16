module.exports = [
    {
        id: 0,
        image: "/assets/fotos/makan.jpg",
        text:
            "Civil war in Germany just broke out a month ago. Since then, more than million Germans have been forced to leave their homes and you and your family are among them.  You have sold your house in Berlin for a fraction of its value - €20,000 (unfortunately). After you managed to go south...",
        options: [{ label: "Next", to: 1 }]
    },

    {
        id: 1,
        image: "/assets/running_away.jpg",
        text:
            "You are now in Southern Germany but you dream of the safety of Syria.   To make that journey, you must risk being smuggled across land or sea, or both.  As a German, to get to Middle East you have to go through Italy or Austria. You have to choose...What do you do?",
        options: [
            {
                label:
                    "Italy is cheap but living conditions are poor. The onward journey has to be by sea.",
                to: 2
            },
            {
                label:
                    "Austria is more expensive but living conditions are better. You could reach Syria by land.",
                to: 3
            }
        ]
    },

    {
        id: 2,
        image: "/assets/port.jpg",
        text:
            "There are more than 200,000 German refugees in Italy. It's not a stable country and jobs are scarce. Since 2084, Italy has not allowed any more Germans into the country without a visa. But you and your family gets lucky and is granted visas. You've been in Italy a week when you meet Matteo, the smuggler. Matteo says he can help you. You're not sure if you can trust him, but you know you have to take risks on this journey… Matteo explains that you have two options: to travel to Egypt from Italian port of Lampedusa by sea or you can go to Libya, where the sea crossing is shorter.",
        options: [
            {
                label:
                    "Libya, where it's a shorter sea crossing to Benghazi. There are pirate groups on the way and the route can be dangerous.",
                to: 4
            },
            {
                label:
                    "Egypt, where it's a much longer journey by sea. There is a higher chance of getting caught and deported.",
                to: 5
            }
        ]
    },

    {
        id: 3,
        image: "/assets/on_the_boat.jpg",
        text:
            "The bus ride from Munich to Vienna have taken a large chunk of your money. After a week in Vienna, you meet Maximilian, a smuggler. He takes you to a busy cafe in the centre of town. He says he can get you to Turkey for an initial $3,000 deposit per person.",
        options: [
            {
                label:
                    "Pay him the deposit although the week you've just spent in Turkey has already drained a lot of your resources.",
                to: 6
            },
            {
                label:
                    "Refuse to pay him the deposit because you know that there are many fraudsters and don't want to lose your money.",
                to: 7
            }
        ]
    },

    {
        id: 4,
        image: "/assets/shipwreck.jpg",
        text:
            "From Rome, Matteo takes you and your family to the Southern Italy. It's a dangerous 12-hour drive but you finally reach Agrigento, a Italian Town near the port of Empedocle. Matteo takes you to a house at the end of an alleyway. 'Stay here until I get back. Don't leave!' He says he doesn't want you to be noticed. You are worried about the sea-crossing. It would be good to get water, medicines and life-jackets for the journey. Is now the time? Or do you wait?",
        options: [
            {
                label:
                    "Go out, because this might be your only chance of getting any supplies",
                to: 8
            },
            {
                label:
                    "Stay in, because you might be seen by neighbours and reported",
                to: 9
            }
        ]
    },

    {
        id: 5,
        image: "/assets/roughsea.jpg",
        text:
            "You take a 12-hour bus ride to Agrigento. Matteo the smuggler takes you to a shabby, overcrowded flat. 'Stay here until I get back. Don't leave!' He doesn't want you to get noticed. He insists on an initial payment of €7,000 each and leaves with your money. You and your family wait and wait...The place is disgusting; there is only one toilet between dozens of you. Your family is getting sick. After five days your food supply is running low. You call Matteo but there is no answer. Has he vanished with your money? Should you have trusted him? You must decide whether to stay in the flat or go out to look for him and pick up supplies.",
        options: [
            {
                label:
                    "Go out, but you may be recognised as an illegal immigrant, and if caught, probably deported back to Germany.",
                to: 10
            },
            {
                label:
                    "Stay in, but you will run out of food and he might have taken your money and decided to leave you here.",
                to: 11
            }
        ]
    },

    {
        id: 6,
        image: "/assets/shore.jpg",
        text:
            "Maximilian says you now have a choice: You can pay €7,500 per person and travel by land via Hungary, Serbia, Bulgaria and Greece. Or pay $15,000 per person and go by plane. Both journeys are risky.",
        options: [
            {
                label:
                    "Land may be less risky, there are many routes. But you're less likely to get caught.",
                to: 12
            },
            {
                label:
                    "Travelling by plane is very risky, there is more a chance of getting caught in immigration control. But it saves you time",
                to: 13
            }
        ]
    },

    {
        id: 7,
        image: "/assets/shelter-region.jpg",
        text:
            "You don't pay Maximilian the deposit because you don't trust him. You tried to find another middleman, but it was not succesful instead he reported you to the authority and they deported you back to Germany",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },

    {
        id: 8,
        image: "",
        text:
            "You leave your family in the house and go out to look for supplies. You manage to get small bottles of water, some snacks and some inflatable rings. You are taken to the boat for Libya the following evening. The boat is 10 metres long. Twenty people are already on board when you and your family get in and it casts off into the night. Fifteen minutes later another boat approaches; you're unsure if it's Italian coastguards or a militia group. They fire shots at your boat. You think they want a share of the smugglers' money. Some people jump out in a panic and swim to the shore. Do you jump?",
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
        image: "",
        text:
            "You stayed in, but Matteo never come back. You ask around, but with no luck. You waited for 2 days more then you realise the neighbours have called the police. They are shouting inside in the flat. You are all detained by the Italian Security Officials and held in a police station. You are told that you can only be released if you return to Germany at your own expense.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 10,
        image: "",
        text:
            "You try the bus stop where you arrived, but you can't find him. You ask around, but with no luck. You buy some food and medicine and head back to the flat. At the door, you realise the neighbours have called the police. People are talking and shouting inside in the flat. You are all detained by the Italian Security Officials and held in a police station. You are told that you can only be released if you return to Germany at your own expense.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 11,
        image: "",
        text:
            "You have run out of food and are desperate to get out. Matteo finally comes back. 'The boats are ready. You're leaving NOW!' He divides you into two groups: women and children in one boat and the men in the other. You ask to stay together, but he doesn't listen to you.",
        options: [
            {
                label:
                    "If you stay together, you'll lose your money and will probably have to go back to the flat.",
                to: 16
            },
            {
                label:
                    "If you split up, you might survive but you will have to make the journey without the others.",
                to: 17
            }
        ]
    },
    {
        id: 12,
        image: "",
        text:
            "Following that evening you took long bus journey, with 26 other Germans, from Vienna to Meric (near the Greek border). The river Maritsa is the natural border between Greece and Turkey. Border guards patrol parts of the area and the river is 50m wide. Maximilian has one inflatable boat. He separates you into groups. You're in the first group with your family. You make it to the other side. The second group struggles. The inflatable boat can't handle so many people. Panic kicks in and the boat capsizes. You see a woman and her daughter struggling to swim across. Do you jump in to save them or run into the woods with your family?",
        options: [
            {
                label:
                    "Rescue them. Can you bear to let them struggle, knowing you can help them?",
                to: 18
            },
            {
                label:
                    "Run into the woods. If you stop to help, the commotion might attract the border guards and you could all be caught.",
                to: 19
            }
        ]
    },
    {
        id: 13,
        image: "",
        text:
            "You can't fly without a visa. You are all detained by the Austrian Immigration Officials and held in a police station. Before deported back to Germany",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 14,
        image: "",
        text:
            "You decide to dive into the darkness. You and your family swim to the safety of the shore. Now you're back in Italy with very little money left. You might have to stay here and make a new life for yourself. You have fled one conflict for another and lost all your money.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 15,
        image: "",
        text:
            "The other boat pulls up alongside and demand money. The smuggler pays them off. You and the others who stayed on board hope you can now carry on to Italy. When your boat reaches international waters, the hull gives in, it must have been damaged in the shooting. The boat capsizes. Luckily, you have the inflatable rings that you can all hold onto. You hope you can survive a few hours in the cold water. There are already dead bodies around you, floating in the water. You huddle together for warmth and keep swimming. An Syrian ship looms out of the dark. You all scream and shout to get attention. The crew sees you, and takes you to Syria. You've arrived in Syria.",
        ending: {
            text: "You Win",
            code: "green"
        }
    },
    {
        id: 16,
        image: "",
        text:
            "You refuse to be separated, your family is everything to you. Matteo won't give you your money back. Lost in the chaos at the shore, another smuggler tells you he has a boat but he needs the rest of your money. In desperation, you give it to him. He takes you to a small boat already crammed full of people. After two days at sea, a big cargo ship appears. Everyone starts screaming and waving to attract attention. The ship sees you and follows your boat. After an hour, a Syrian helicopter appears, help is on its way and you will make it to Europe.",
        ending: {
            text: "You Win",
            code: "green"
        }
    },
    {
        id: 17,
        image: "",
        text:
            "Matteo explains that if you give him more money he can put you and your family on the same boat, together. He's asking for the rest of your money. What do you do? Do you pay more?",
        options: [
            {
                label:
                    "Pay him more. He could be telling the truth, he has helped you so far. This may be your last chance to stay together.",
                to: 20
            },
            {
                label:
                    "Don't pay. He could be lying. If you give him the money you will be penniless.",
                to: 21
            }
        ]
    },
    {
        id: 18,
        image: "",
        text:
            "You dive in and rescue the mother and her child and make it to the bank safely. But you're back on the Turkish side where you began. Your family is now in Greece, you're still in Turkey. The commotion has attracted attention. The Turkish border guards arrive and round up you and the remaining passengers. You end up in a refugee camp in Turkey without your family and with no money. All you can do is hope that your family made it.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 19,
        image: "",
        text:
            "You leave the mother and daughter struggling in the water and hope they make it. You are now in Turkey with your family – near there at last! You know you need to keep a low profile because you can only claim asylum in country you first set foot in. Three days later you find the man in a restaurant in the suburbs of Istanbul. He sells you fake Syrian passports. You then fly to Aleppo. You see the police at the airport and you approach them and say: 'I have come to seek asylum. I am from Germany'. You and your family are granted a refugee status and you can stay there.",
        ending: {
            text: "You Win",
            code: "green"
        }
    },
    {
        id: 20,
        image: "",
        text:
            "You pay Matteo the rest of your money. He tricks you. You are forced to separate. You have no choice, you can't turn back now. You are separated from your family. Half-way across the Mediterranean, the boat capsizes and you drown.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },
    {
        id: 21,
        image: "",
        text:
            "You get to the shore and the boats are crammed with people. One full of women and children, one with men. You are torn from your family. You don't know when you will see them again. Suddenly a fire breaks out on board and you are forced to jump into the water. You hope that the other boat makes it. No help comes and you drown in the Mediterranean.",
        ending: {
            text: "You Lose",
            code: "red"
        }
    }
];
