type IconDetails = {
    icon: string,
    iconDay: string,
    iconNight: string
};

export class IconUtils {

    private static iconMap: Record<string, IconDetails> = {
        '200': {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "201": {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "202": {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "210": {
            "icon": "lightning",
            "iconDay": "day-lightning",
            "iconNight": "night-alt-lightning"
        },
        "211": {
            "icon": "lightning",
            "iconDay": "day-lightning",
            "iconNight": "night-alt-lightning"
        },
        "212": {
            "icon": "lightning",
            "iconDay": "day-lightning",
            "iconNight": "night-alt-lightning"
        },
        "221": {
            "icon": "lightning",
            "iconDay": "day-lightning",
            "iconNight": "night-alt-lightning"
        },
        "230": {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "231": {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "232": {
            "icon": "thunderstorm",
            "iconDay": "day-thunderstorm",
            "iconNight": "night-alt-thunderstorm"
        },
        "300": {
            "icon": "sprinkle",
            "iconDay": "day-sprinkle",
            "iconNight": "night-alt-sprinkle"
        },
        "301": {
            "icon": "sprinkle",
            "iconDay": "day-sprinkle",
            "iconNight": "night-alt-sprinkle"
        },
        "302": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "310": {
            "icon": "rain-mix",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "311": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "312": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "313": {
            "icon": "showers",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "314": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "321": {
            "icon": "sprinkle",
            "iconDay": "day-sprinkle",
            "iconNight": "night-alt-sprinkle"
        },
        "500": {
            "icon": "sprinkle",
            "iconDay": "day-sprinkle",
            "iconNight": "night-alt-sprinkle"
        },
        "501": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "502": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "503": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "504": {
            "icon": "rain",
            "iconDay": "day-rain",
            "iconNight": "night-alt-rain"
        },
        "511": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "520": {
            "icon": "showers",
            "iconDay": "day-showers",
            "iconNight": "night-alt-showers"
        },
        "521": {
            "icon": "showers",
            "iconDay": "day-showers",
            "iconNight": "night-alt-showers"
        },
        "522": {
            "icon": "showers",
            "iconDay": "day-showers",
            "iconNight": "night-alt-showers"
        },
        "531": {
            "icon": "storm-showers",
            "iconDay": "day-storm-showers",
            "iconNight": "night-alt-storm-showers"
        },
        "600": {
            "icon": "snow",
            "iconDay": "day-snow",
            "iconNight": "night-alt-snow"
        },
        "601": {
            "icon": "snow",
            "iconDay": "day-sleet",
            "iconNight": "night-alt-sleet"
        },
        "602": {
            "icon": "sleet",
            "iconDay": "day-snow",
            "iconNight": "night-alt-snow"
        },
        "611": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "612": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "615": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "616": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "620": {
            "icon": "rain-mix",
            "iconDay": "day-rain-mix",
            "iconNight": "night-alt-rain-mix"
        },
        "621": {
            "icon": "snow",
            "iconDay": "day-snow",
            "iconNight": "night-alt-snow"
        },
        "622": {
            "icon": "snow",
            "iconDay": "day-snow",
            "iconNight": "night-alt-snow"
        },
        "701": {
            "icon": "showers",
            "iconDay": "day-showers",
            "iconNight": "night-alt-showers"
        },
        "711": {
            "icon": "smoke",
            "iconDay": "smoke",
            "iconNight": "smoke"
        },
        "721": {
            "icon": "day-haze",
            "iconDay": "day-haze",
            "iconNight": "day-haze"
        },
        "731": {
            "icon": "dust",
            "iconDay": "dust",
            "iconNight": "dust"
        },
        "741": {
            "icon": "fog",
            "iconDay": "day-fog",
            "iconNight": "night-fog"
        },
        "761": {
            "icon": "dust",
            "iconDay": "dust",
            "iconNight": "dust"
        },
        "762": {
            "icon": "dust",
            "iconDay": "dust",
            "iconNight": "dust"
        },
        "771": {
            "icon": "cloudy-gusts",
            "iconDay": "cloudy-gusts",
            "iconNight": "cloudy-gusts"
        },
        "781": {
            "icon": "tornado",
            "iconDay": "tornado",
            "iconNight": "tornado"
        },
        "800": {
            "icon": "day-sunny",
            "iconDay": "day-sunny",
            "iconNight": "night-clear"
        },
        "801": {
            "icon": "cloudy-gusts",
            "iconDay": "day-cloudy-gusts",
            "iconNight": "night-alt-cloudy-gusts"
        },
        "802": {
            "icon": "cloudy-gusts",
            "iconDay": "day-cloudy-gusts",
            "iconNight": "night-alt-cloudy-gusts"
        },
        "803": {
            "icon": "cloudy-gusts",
            "iconDay": "day-cloudy-gusts",
            "iconNight": "night-alt-cloudy-gusts"
        },
        "804": {
            "icon": "cloudy",
            "iconDay": "day-sunny-overcast",
            "iconNight": "night-alt-cloudy"
        },
        "900": {
            "icon": "tornado",
            "iconDay": "tornado",
            "iconNight": "tornado"
        },
        "901": {
            "icon": "storm-showers",
            "iconDay": "storm-showers",
            "iconNight": "storm-showers"
        },
        "902": {
            "icon": "hurricane",
            "iconDay": "hurricane",
            "iconNight": "hurricane"
        },
        "903": {
            "icon": "snowflake-cold",
            "iconDay": "snowflake-cold",
            "iconNight": "snowflake-cold"
        },
        "904": {
            "icon": "hot",
            "iconDay": "hot",
            "iconNight": "hot"
        },
        "905": {
            "icon": "windy",
            "iconDay": "windy",
            "iconNight": "windy"
        },
        "906": {
            "icon": "hail",
            "iconDay": "day-hail",
            "iconNight": "night-alt-hail"
        },
        "957": {
            "icon": "strong-wind",
            "iconDay": "strong-wind",
            "iconNight": "strong-wind"
        }
    };


    public static getIconNameById(id: number): string {
        const key = id.toString();
        return this.iconMap[key]['icon'];
    }
}