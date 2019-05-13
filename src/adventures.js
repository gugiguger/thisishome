module.exports = [
    {
        id: 0,
        image: "/assets/burning-city.jpg",
        text:
            "You woke up in the middle of the night and found out that there is a war happening and the city is slowly start to burn.",
        options: [{ label: "Next", to: 1 }]
    },

    {
        id: 1,
        image: "/assets/running_away.jpg",
        text:
            "You needed to act quickly and you decided to leave everything behind. You left the city and run towards the port...",
        options: [{ label: "Next", to: 2 }]
    },

    {
        id: 2,
        image: "/assets/port.jpg",
        text:
            "There are people trying to escape with the boat but it is already full of people. Do you want to",
        options: [
            { label: "Try to get into the overload boat", to: 3 },
            { label: "Fuck it I am gonna swim", to: 5 }
        ]
    },

    {
        id: 3,
        image: "/assets/on_the_boat.jpg",
        text: "The boat is too full it cant handle the amount of the people",
        options: [{ label: "Next", to: 4 }]
    },

    {
        id: 4,
        image: "/assets/shipwreck.jpg",
        text: "The boat start to sink and you jump to the water",
        options: [{ label: "Next", to: 5 }]
    },

    {
        id: 5,
        image: "/assets/roughsea.jpg",
        text: "You swim and start to get drown.",
        options: [{ label: "Next", to: 6 }]
    },

    {
        id: 6,
        image: "/assets/shore.jpg",
        text:
            "You reached the shore. Are you gonna continue to go to Europe or to the shelter region ",
        options: [
            { label: "go to shelter region", to: 7 },
            { label: "go to europe", to: 8 }
        ]
    },

    {
        id: 7,
        image: "/assets/shelter-region.jpg",
        text: "you go there and died of hunger because UNHCR left the mission",
        ending: {
            text: "You Lose",
            code: "red"
        }
    },

    {
        id: 8,
        image: "",
        text: "You reach border control",
        options: [{ label: "bribe", to: 9 }, { label: "gooooo", to: 10 }]
    }
];
