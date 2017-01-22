// Config
Chart.defaults.global.animation.duration = 600;

// Emojies
var emojiBank = [{code: "0023-20e3", name: "hash key"}, {code: "0030-20e3", name: "keycap 0"}, {code: "0031-20e3", name: "keycap 1"}, {code: "0032-20e3", name: "keycap 2"}, {code: "0033-20e3", name: "keycap 3"}, {code: "0034-20e3", name: "keycap 4"}, {code: "0035-20e3", name: "keycap 5"}, {code: "0036-20e3", name: "keycap 6"}, {code: "0037-20e3", name: "keycap 7"}, {code: "0038-20e3", name: "keycap 8"}, {code: "0039-20e3", name: "keycap 9"}, {code: "00a9", name: "copyright sign"}, {code: "00ae", name: "registered sign"}, {code: "1f004", name: "mahjong tile red dragon"}, {code: "1f0cf", name: "playing card black joker"}, {code: "1f170", name: "negative squared latin capital letter a"}, {code: "1f171", name: "negative squared latin capital letter b"}, {code: "1f17e", name: "negative squared latin capital letter o"}, {code: "1f17f", name: "negative squared latin capital letter p"}, {code: "1f18e", name: "negative squared ab"}, {code: "1f191", name: "squared cl"}, {code: "1f192", name: "squared cool"}, {code: "1f193", name: "squared free"}, {code: "1f194", name: "squared id"}, {code: "1f195", name: "squared new"}, {code: "1f196", name: "squared ng"}, {code: "1f197", name: "squared ok"}, {code: "1f198", name: "squared sos"}, {code: "1f199", name: "squared up with exclamation mark"}, {code: "1f19a", name: "squared vs"}, {code: "1f1e8-1f1f3", name: "regional indicator symbol letters cn"}, {code: "1f1e9-1f1ea", name: "regional indicator symbol letters de"}, {code: "1f1ea-1f1f8", name: "regional indicator symbol letters es"}, {code: "1f1eb-1f1f7", name: "regional indicator symbol letters fr"}, {code: "1f1ec-1f1e7", name: "regional indicator symbol letters gb"}, {code: "1f1ee-1f1f9", name: "regional indicator symbol letters it"}, {code: "1f1ef-1f1f5", name: "regional indicator symbol letters jp"}, {code: "1f1f0-1f1f7", name: "regional indicator symbol letters kr"}, {code: "1f1f7-1f1fa", name: "regional indicator symbol letters ru"}, {code: "1f1fa-1f1f8", name: "regional indicator symbol letters us"}, {code: "1f201", name: "squared katakana koko"}, {code: "1f202", name: "squared katakana sa"}, {code: "1f21a", name: "squared cjk unified ideograph-7121"}, {code: "1f22f", name: "squared cjk unified ideograph-6307"}, {code: "1f232", name: "squared cjk unified ideograph-7981"}, {code: "1f233", name: "squared cjk unified ideograph-7a7a"}, {code: "1f234", name: "squared cjk unified ideograph-5408"}, {code: "1f235", name: "squared cjk unified ideograph-6e80"}, {code: "1f236", name: "squared cjk unified ideograph-6709"}, {code: "1f237", name: "squared cjk unified ideograph-6708"}, {code: "1f238", name: "squared cjk unified ideograph-7533"}, {code: "1f239", name: "squared cjk unified ideograph-5272"}, {code: "1f23a", name: "squared cjk unified ideograph-55b6"}, {code: "1f250", name: "circled ideograph advantage"}, {code: "1f251", name: "circled ideograph accept"}, {code: "1f300", name: "cyclone"}, {code: "1f301", name: "foggy"}, {code: "1f302", name: "closed umbrella"}, {code: "1f303", name: "night with stars"}, {code: "1f304", name: "sunrise over mountains"}, {code: "1f305", name: "sunrise"}, {code: "1f306", name: "cityscape at dusk"}, {code: "1f307", name: "sunset over buildings"}, {code: "1f308", name: "rainbow"}, {code: "1f309", name: "bridge at night"}, {code: "1f30a", name: "water wave"}, {code: "1f30b", name: "volcano"}, {code: "1f30c", name: "milky way"}, {code: "1f30d", name: "earth globe europe-africa"}, {code: "1f30e", name: "earth globe americas"}, {code: "1f30f", name: "earth globe asia-australia"}, {code: "1f310", name: "globe with meridians"}, {code: "1f311", name: "new moon symbol"}, {code: "1f312", name: "waxing crescent moon symbol"}, {code: "1f313", name: "first quarter moon symbol"}, {code: "1f314", name: "waxing gibbous moon symbol"}, {code: "1f315", name: "full moon symbol"}, {code: "1f316", name: "waning gibbous moon symbol"}, {code: "1f317", name: "last quarter moon symbol"}, {code: "1f318", name: "waning crescent moon symbol"}, {code: "1f319", name: "crescent moon"}, {code: "1f31a", name: "new moon with face"}, {code: "1f31b", name: "first quarter moon with face"}, {code: "1f31c", name: "last quarter moon with face"}, {code: "1f31d", name: "full moon with face"}, {code: "1f31e", name: "sun with face"}, {code: "1f31f", name: "glowing star"}, {code: "1f320", name: "shooting star"}, {code: "1f330", name: "chestnut"}, {code: "1f331", name: "seedling"}, {code: "1f332", name: "evergreen tree"}, {code: "1f333", name: "deciduous tree"}, {code: "1f334", name: "palm tree"}, {code: "1f335", name: "cactus"}, {code: "1f337", name: "tulip"}, {code: "1f338", name: "cherry blossom"}, {code: "1f339", name: "rose"}, {code: "1f33a", name: "hibiscus"}, {code: "1f33b", name: "sunflower"}, {code: "1f33c", name: "blossom"}, {code: "1f33d", name: "ear of maize"}, {code: "1f33e", name: "ear of rice"}, {code: "1f33f", name: "herb"}, {code: "1f340", name: "four leaf clover"}, {code: "1f341", name: "maple leaf"}, {code: "1f342", name: "fallen leaf"}, {code: "1f343", name: "leaf fluttering in wind"}, {code: "1f344", name: "mushroom"}, {code: "1f345", name: "tomato"}, {code: "1f346", name: "aubergine"}, {code: "1f347", name: "grapes"}, {code: "1f348", name: "melon"}, {code: "1f349", name: "watermelon"}, {code: "1f34a", name: "tangerine"}, {code: "1f34b", name: "lemon"}, {code: "1f34c", name: "banana"}, {code: "1f34d", name: "pineapple"}, {code: "1f34e", name: "red apple"}, {code: "1f34f", name: "green apple"}, {code: "1f350", name: "pear"}, {code: "1f351", name: "peach"}, {code: "1f352", name: "cherries"}, {code: "1f353", name: "strawberry"}, {code: "1f354", name: "hamburger"}, {code: "1f355", name: "slice of pizza"}, {code: "1f356", name: "meat on bone"}, {code: "1f357", name: "poultry leg"}, {code: "1f358", name: "rice cracker"}, {code: "1f359", name: "rice ball"}, {code: "1f35a", name: "cooked rice"}, {code: "1f35b", name: "curry and rice"}, {code: "1f35c", name: "steaming bowl"}, {code: "1f35d", name: "spaghetti"}, {code: "1f35e", name: "bread"}, {code: "1f35f", name: "french fries"}, {code: "1f360", name: "roasted sweet potato"}, {code: "1f361", name: "dango"}, {code: "1f362", name: "oden"}, {code: "1f363", name: "sushi"}, {code: "1f364", name: "fried shrimp"}, {code: "1f365", name: "fish cake with swirl design"}, {code: "1f366", name: "soft ice cream"}, {code: "1f367", name: "shaved ice"}, {code: "1f368", name: "ice cream"}, {code: "1f369", name: "doughnut"}, {code: "1f36a", name: "cookie"}, {code: "1f36b", name: "chocolate bar"}, {code: "1f36c", name: "candy"}, {code: "1f36d", name: "lollipop"}, {code: "1f36e", name: "custard"}, {code: "1f36f", name: "honey pot"}, {code: "1f370", name: "shortcake"}, {code: "1f371", name: "bento box"}, {code: "1f372", name: "pot of food"}, {code: "1f373", name: "cooking"}, {code: "1f374", name: "fork and knife"}, {code: "1f375", name: "teacup without handle"}, {code: "1f376", name: "sake bottle and cup"}, {code: "1f377", name: "wine glass"}, {code: "1f378", name: "cocktail glass"}, {code: "1f379", name: "tropical drink"}, {code: "1f37a", name: "beer mug"}, {code: "1f37b", name: "clinking beer mugs"}, {code: "1f37c", name: "baby bottle"}, {code: "1f380", name: "ribbon"}, {code: "1f381", name: "wrapped present"}, {code: "1f382", name: "birthday cake"}, {code: "1f383", name: "jack-o-lantern"}, {code: "1f384", name: "christmas tree"}, {code: "1f385", name: "father christmas"}, {code: "1f386", name: "fireworks"}, {code: "1f387", name: "firework sparkler"}, {code: "1f388", name: "balloon"}, {code: "1f389", name: "party popper"}, {code: "1f38a", name: "confetti ball"}, {code: "1f38b", name: "tanabata tree"}, {code: "1f38c", name: "crossed flags"}, {code: "1f38d", name: "pine decoration"}, {code: "1f38e", name: "japanese dolls"}, {code: "1f38f", name: "carp streamer"}, {code: "1f390", name: "wind chime"}, {code: "1f391", name: "moon viewing ceremony"}, {code: "1f392", name: "school satchel"}, {code: "1f393", name: "graduation cap"}, {code: "1f3a0", name: "carousel horse"}, {code: "1f3a1", name: "ferris wheel"}, {code: "1f3a2", name: "roller coaster"}, {code: "1f3a3", name: "fishing pole and fish"}, {code: "1f3a4", name: "microphone"}, {code: "1f3a5", name: "movie camera"}, {code: "1f3a6", name: "cinema"}, {code: "1f3a7", name: "headphone"}, {code: "1f3a8", name: "artist palette"}, {code: "1f3a9", name: "top hat"}, {code: "1f3aa", name: "circus tent"}, {code: "1f3ab", name: "ticket"}, {code: "1f3ac", name: "clapper board"}, {code: "1f3ad", name: "performing arts"}, {code: "1f3ae", name: "video game"}, {code: "1f3af", name: "direct hit"}, {code: "1f3b0", name: "slot machine"}, {code: "1f3b1", name: "billiards"}, {code: "1f3b2", name: "game die"}, {code: "1f3b3", name: "bowling"}, {code: "1f3b4", name: "flower playing cards"}, {code: "1f3b5", name: "musical note"}, {code: "1f3b6", name: "multiple musical notes"}, {code: "1f3b7", name: "saxophone"}, {code: "1f3b8", name: "guitar"}, {code: "1f3b9", name: "musical keyboard"}, {code: "1f3ba", name: "trumpet"}, {code: "1f3bb", name: "violin"}, {code: "1f3bc", name: "musical score"}, {code: "1f3bd", name: "running shirt with sash"}, {code: "1f3be", name: "tennis racquet and ball"}, {code: "1f3bf", name: "ski and ski boot"}, {code: "1f3c0", name: "basketball and hoop"}, {code: "1f3c1", name: "chequered flag"}, {code: "1f3c2", name: "snowboarder"}, {code: "1f3c3", name: "runner"}, {code: "1f3c4", name: "surfer"}, {code: "1f3c6", name: "trophy"}, {code: "1f3c7", name: "horse racing"}, {code: "1f3c8", name: "american football"}, {code: "1f3c9", name: "rugby football"}, {code: "1f3ca", name: "swimmer"}, {code: "1f3e0", name: "house building"}, {code: "1f3e1", name: "house with garden"}, {code: "1f3e2", name: "office building"}, {code: "1f3e3", name: "japanese post office"}, {code: "1f3e4", name: "european post office"}, {code: "1f3e5", name: "hospital"}, {code: "1f3e6", name: "bank"}, {code: "1f3e7", name: "automated teller machine"}, {code: "1f3e8", name: "hotel"}, {code: "1f3e9", name: "love hotel"}, {code: "1f3ea", name: "convenience store"}, {code: "1f3eb", name: "school"}, {code: "1f3ec", name: "department store"}, {code: "1f3ed", name: "factory"}, {code: "1f3ee", name: "izakaya lantern"}, {code: "1f3ef", name: "japanese castle"}, {code: "1f3f0", name: "european castle"}, {code: "1f400", name: "rat"}, {code: "1f401", name: "mouse"}, {code: "1f402", name: "ox"}, {code: "1f403", name: "water buffalo"}, {code: "1f404", name: "cow"}, {code: "1f405", name: "tiger"}, {code: "1f406", name: "leopard"}, {code: "1f407", name: "rabbit"}, {code: "1f408", name: "cat"}, {code: "1f409", name: "dragon"}, {code: "1f40a", name: "crocodile"}, {code: "1f40b", name: "whale"}, {code: "1f40c", name: "snail"}, {code: "1f40d", name: "snake"}, {code: "1f40e", name: "horse"}, {code: "1f40f", name: "ram"}, {code: "1f410", name: "goat"}, {code: "1f411", name: "sheep"}, {code: "1f412", name: "monkey"}, {code: "1f413", name: "rooster"}, {code: "1f414", name: "chicken"}, {code: "1f415", name: "dog"}, {code: "1f416", name: "pig"}, {code: "1f417", name: "boar"}, {code: "1f418", name: "elephant"}, {code: "1f419", name: "octopus"}, {code: "1f41a", name: "spiral shell"}, {code: "1f41b", name: "bug"}, {code: "1f41c", name: "ant"}, {code: "1f41d", name: "honeybee"}, {code: "1f41e", name: "lady beetle"}, {code: "1f41f", name: "fish"}, {code: "1f420", name: "tropical fish"}, {code: "1f421", name: "blowfish"}, {code: "1f422", name: "turtle"}, {code: "1f423", name: "hatching chick"}, {code: "1f424", name: "baby chick"}, {code: "1f425", name: "front-facing baby chick"}, {code: "1f426", name: "bird"}, {code: "1f427", name: "penguin"}, {code: "1f428", name: "koala"}, {code: "1f429", name: "poodle"}, {code: "1f42a", name: "dromedary camel"}, {code: "1f42b", name: "bactrian camel"}, {code: "1f42c", name: "dolphin"}, {code: "1f42d", name: "mouse face"}, {code: "1f42e", name: "cow face"}, {code: "1f42f", name: "tiger face"}, {code: "1f430", name: "rabbit face"}, {code: "1f431", name: "cat face"}, {code: "1f432", name: "dragon face"}, {code: "1f433", name: "spouting whale"}, {code: "1f434", name: "horse face"}, {code: "1f435", name: "monkey face"}, {code: "1f436", name: "dog face"}, {code: "1f437", name: "pig face"}, {code: "1f438", name: "frog face"}, {code: "1f439", name: "hamster face"}, {code: "1f43a", name: "wolf face"}, {code: "1f43b", name: "bear face"}, {code: "1f43c", name: "panda face"}, {code: "1f43d", name: "pig nose"}, {code: "1f43e", name: "paw prints"}, {code: "1f440", name: "eyes"}, {code: "1f442", name: "ear"}, {code: "1f443", name: "nose"}, {code: "1f444", name: "mouth"}, {code: "1f445", name: "tongue"}, {code: "1f446", name: "white up pointing backhand index"}, {code: "1f447", name: "white down pointing backhand index"}, {code: "1f448", name: "white left pointing backhand index"}, {code: "1f449", name: "white right pointing backhand index"}, {code: "1f44a", name: "fisted hand sign"}, {code: "1f44b", name: "waving hand sign"}, {code: "1f44c", name: "ok hand sign"}, {code: "1f44d", name: "thumbs up sign"}, {code: "1f44e", name: "thumbs down sign"}, {code: "1f44f", name: "clapping hands sign"}, {code: "1f450", name: "open hands sign"}, {code: "1f451", name: "crown"}, {code: "1f452", name: "womans hat"}, {code: "1f453", name: "eyeglasses"}, {code: "1f454", name: "necktie"}, {code: "1f455", name: "t-shirt"}, {code: "1f456", name: "jeans"}, {code: "1f457", name: "dress"}, {code: "1f458", name: "kimono"}, {code: "1f459", name: "bikini"}, {code: "1f45a", name: "womans clothes"}, {code: "1f45b", name: "purse"}, {code: "1f45c", name: "handbag"}, {code: "1f45d", name: "pouch"}, {code: "1f45e", name: "mans shoe"}, {code: "1f45f", name: "athletic shoe"}, {code: "1f460", name: "high-heeled shoe"}, {code: "1f461", name: "womans sandal"}, {code: "1f462", name: "womans boots"}, {code: "1f463", name: "footprints"}, {code: "1f464", name: "bust in silhouette"}, {code: "1f465", name: "busts in silhouette"}, {code: "1f466", name: "boy"}, {code: "1f467", name: "girl"}, {code: "1f468", name: "man"}, {code: "1f469", name: "woman"}, {code: "1f46a", name: "family"}, {code: "1f46b", name: "man and woman holding hands"}, {code: "1f46c", name: "two men holding hands"}, {code: "1f46d", name: "two women holding hands"}, {code: "1f46e", name: "police officer"}, {code: "1f46f", name: "woman with bunny ears"}, {code: "1f470", name: "bride with veil"}, {code: "1f471", name: "person with blond hair"}, {code: "1f472", name: "man with gua pi mao"}, {code: "1f473", name: "man with turban"}, {code: "1f474", name: "older man"}, {code: "1f475", name: "older woman"}, {code: "1f476", name: "baby"}, {code: "1f477", name: "construction worker"}, {code: "1f478", name: "princess"}, {code: "1f479", name: "japanese ogre"}, {code: "1f47a", name: "japanese goblin"}, {code: "1f47b", name: "ghost"}, {code: "1f47c", name: "baby angel"}, {code: "1f47d", name: "extraterrestrial alien"}, {code: "1f47e", name: "alien monster"}, {code: "1f47f", name: "imp"}, {code: "1f480", name: "skull"}, {code: "1f481", name: "information desk person"}, {code: "1f482", name: "guardsman"}, {code: "1f483", name: "dancer"}, {code: "1f484", name: "lipstick"}, {code: "1f485", name: "nail polish"}, {code: "1f486", name: "face massage"}, {code: "1f487", name: "haircut"}, {code: "1f488", name: "barber pole"}, {code: "1f489", name: "syringe"}, {code: "1f48a", name: "pill"}, {code: "1f48b", name: "kiss mark"}, {code: "1f48c", name: "love letter"}, {code: "1f48d", name: "ring"}, {code: "1f48e", name: "gem stone"}, {code: "1f48f", name: "kiss"}, {code: "1f490", name: "bouquet"}, {code: "1f491", name: "couple with heart"}, {code: "1f492", name: "wedding"}, {code: "1f493", name: "beating heart"}, {code: "1f494", name: "broken heart"}, {code: "1f495", name: "two hearts"}, {code: "1f496", name: "sparkling heart"}, {code: "1f497", name: "growing heart"}, {code: "1f498", name: "heart with arrow"}, {code: "1f499", name: "blue heart"}, {code: "1f49a", name: "green heart"}, {code: "1f49b", name: "yellow heart"}, {code: "1f49c", name: "purple heart"}, {code: "1f49d", name: "heart with ribbon"}, {code: "1f49e", name: "revolving hearts"}, {code: "1f49f", name: "heart decoration"}, {code: "1f4a0", name: "diamond shape with a dot inside"}, {code: "1f4a1", name: "electric light bulb"}, {code: "1f4a2", name: "anger symbol"}, {code: "1f4a3", name: "bomb"}, {code: "1f4a4", name: "sleeping symbol"}, {code: "1f4a5", name: "collision symbol"}, {code: "1f4a6", name: "splashing sweat symbol"}, {code: "1f4a7", name: "droplet"}, {code: "1f4a8", name: "dash symbol"}, {code: "1f4a9", name: "pile of poo"}, {code: "1f4aa", name: "flexed biceps"}, {code: "1f4ab", name: "dizzy symbol"}, {code: "1f4ac", name: "speech balloon"}, {code: "1f4ad", name: "thought balloon"}, {code: "1f4ae", name: "white flower"}, {code: "1f4af", name: "hundred points symbol"}, {code: "1f4b0", name: "money bag"}, {code: "1f4b1", name: "currency exchange"}, {code: "1f4b2", name: "heavy dollar sign"}, {code: "1f4b3", name: "credit card"}, {code: "1f4b4", name: "banknote with yen sign"}, {code: "1f4b5", name: "banknote with dollar sign"}, {code: "1f4b6", name: "banknote with euro sign"}, {code: "1f4b7", name: "banknote with pound sign"}, {code: "1f4b8", name: "money with wings"}, {code: "1f4b9", name: "chart with upwards trend and yen sign"}, {code: "1f4ba", name: "seat"}, {code: "1f4bb", name: "personal computer"}, {code: "1f4bc", name: "briefcase"}, {code: "1f4bd", name: "minidisc"}, {code: "1f4be", name: "floppy disk"}, {code: "1f4bf", name: "optical disc"}, {code: "1f4c0", name: "dvd"}, {code: "1f4c1", name: "file folder"}, {code: "1f4c2", name: "open file folder"}, {code: "1f4c3", name: "page with curl"}, {code: "1f4c4", name: "page facing up"}, {code: "1f4c5", name: "calendar"}, {code: "1f4c6", name: "tear-off calendar"}, {code: "1f4c7", name: "card index"}, {code: "1f4c8", name: "chart with upwards trend"}, {code: "1f4c9", name: "chart with downwards trend"}, {code: "1f4ca", name: "bar chart"}, {code: "1f4cb", name: "clipboard"}, {code: "1f4cc", name: "pushpin"}, {code: "1f4cd", name: "round pushpin"}, {code: "1f4ce", name: "paperclip"}, {code: "1f4cf", name: "straight ruler"}, {code: "1f4d0", name: "triangular ruler"}, {code: "1f4d1", name: "bookmark tabs"}, {code: "1f4d2", name: "ledger"}, {code: "1f4d3", name: "notebook"}, {code: "1f4d4", name: "notebook with decorative cover"}, {code: "1f4d5", name: "closed book"}, {code: "1f4d6", name: "open book"}, {code: "1f4d7", name: "green book"}, {code: "1f4d8", name: "blue book"}, {code: "1f4d9", name: "orange book"}, {code: "1f4da", name: "books"}, {code: "1f4db", name: "name badge"}, {code: "1f4dc", name: "scroll"}, {code: "1f4dd", name: "memo"}, {code: "1f4de", name: "telephone receiver"}, {code: "1f4df", name: "pager"}, {code: "1f4e0", name: "fax machine"}, {code: "1f4e1", name: "satellite antenna"}, {code: "1f4e2", name: "public address loudspeaker"}, {code: "1f4e3", name: "cheering megaphone"}, {code: "1f4e4", name: "outbox tray"}, {code: "1f4e5", name: "inbox tray"}, {code: "1f4e6", name: "package"}, {code: "1f4e7", name: "e-mail symbol"}, {code: "1f4e8", name: "incoming envelope"}, {code: "1f4e9", name: "envelope with downwards arrow above"}, {code: "1f4ea", name: "closed mailbox with lowered flag"}, {code: "1f4eb", name: "closed mailbox with raised flag"}, {code: "1f4ec", name: "open mailbox with raised flag"}, {code: "1f4ed", name: "open mailbox with lowered flag"}, {code: "1f4ee", name: "postbox"}, {code: "1f4ef", name: "postal horn"}, {code: "1f4f0", name: "newspaper"}, {code: "1f4f1", name: "mobile phone"}, {code: "1f4f2", name: "mobile phone with rightwards arrow at left"}, {code: "1f4f3", name: "vibration mode"}, {code: "1f4f4", name: "mobile phone off"}, {code: "1f4f5", name: "no mobile phones"}, {code: "1f4f6", name: "antenna with bars"}, {code: "1f4f7", name: "camera"}, {code: "1f4f9", name: "video camera"}, {code: "1f4fa", name: "television"}, {code: "1f4fb", name: "radio"}, {code: "1f4fc", name: "videocassette"}, {code: "1f500", name: "twisted rightwards arrows"}, {code: "1f501", name: "clockwise rightwards and leftwards open circle arrows"}, {code: "1f502", name: "clockwise rightwards and leftwards open circle arrows with circled one overlay"}, {code: "1f503", name: "clockwise downwards and upwards open circle arrows"}, {code: "1f504", name: "anticlockwise downwards and upwards open circle arrows"}, {code: "1f505", name: "low brightness symbol"}, {code: "1f506", name: "high brightness symbol"}, {code: "1f507", name: "speaker with cancellation stroke"}, {code: "1f508", name: "speaker"}, {code: "1f509", name: "speaker with one sound wave"}, {code: "1f50a", name: "speaker with three sound waves"}, {code: "1f50b", name: "battery"}, {code: "1f50c", name: "electric plug"}, {code: "1f50d", name: "left-pointing magnifying glass"}, {code: "1f50e", name: "right-pointing magnifying glass"}, {code: "1f50f", name: "lock with ink pen"}, {code: "1f510", name: "closed lock with key"}, {code: "1f511", name: "key"}, {code: "1f512", name: "lock"}, {code: "1f513", name: "open lock"}, {code: "1f514", name: "bell"}, {code: "1f515", name: "bell with cancellation stroke"}, {code: "1f516", name: "bookmark"}, {code: "1f517", name: "link symbol"}, {code: "1f518", name: "radio button"}, {code: "1f519", name: "back with leftwards arrow above"}, {code: "1f51a", name: "end with leftwards arrow above"}, {code: "1f51b", name: "on with exclamation mark with left right arrow above"}, {code: "1f51c", name: "soon with rightwards arrow above"}, {code: "1f51d", name: "top with upwards arrow above"}, {code: "1f51e", name: "no one under eighteen symbol"}, {code: "1f51f", name: "keycap ten"}, {code: "1f520", name: "input symbol for latin capital letters"}, {code: "1f521", name: "input symbol for latin small letters"}, {code: "1f522", name: "input symbol for numbers"}, {code: "1f523", name: "input symbol for symbols"}, {code: "1f524", name: "input symbol for latin letters"}, {code: "1f525", name: "fire"}, {code: "1f526", name: "electric torch"}, {code: "1f527", name: "wrench"}, {code: "1f528", name: "hammer"}, {code: "1f529", name: "nut and bolt"}, {code: "1f52a", name: "hocho"}, {code: "1f52b", name: "pistol"}, {code: "1f52c", name: "microscope"}, {code: "1f52d", name: "telescope"}, {code: "1f52e", name: "crystal ball"}, {code: "1f52f", name: "six pointed star with middle dot"}, {code: "1f530", name: "japanese symbol for beginner"}, {code: "1f531", name: "trident emblem"}, {code: "1f532", name: "black square button"}, {code: "1f533", name: "white square button"}, {code: "1f534", name: "large red circle"}, {code: "1f535", name: "large blue circle"}, {code: "1f536", name: "large orange diamond"}, {code: "1f537", name: "large blue diamond"}, {code: "1f538", name: "small orange diamond"}, {code: "1f539", name: "small blue diamond"}, {code: "1f53a", name: "up-pointing red triangle"}, {code: "1f53b", name: "down-pointing red triangle"}, {code: "1f53c", name: "up-pointing small red triangle"}, {code: "1f53d", name: "down-pointing small red triangle"}, {code: "1f550", name: "clock face one oclock"}, {code: "1f551", name: "clock face two oclock"}, {code: "1f552", name: "clock face three oclock"}, {code: "1f553", name: "clock face four oclock"}, {code: "1f554", name: "clock face five oclock"}, {code: "1f555", name: "clock face six oclock"}, {code: "1f556", name: "clock face seven oclock"}, {code: "1f557", name: "clock face eight oclock"}, {code: "1f558", name: "clock face nine oclock"}, {code: "1f559", name: "clock face ten oclock"}, {code: "1f55a", name: "clock face eleven oclock"}, {code: "1f55b", name: "clock face twelve oclock"}, {code: "1f55c", name: "clock face one-thirty"}, {code: "1f55d", name: "clock face two-thirty"}, {code: "1f55e", name: "clock face three-thirty"}, {code: "1f55f", name: "clock face four-thirty"}, {code: "1f560", name: "clock face five-thirty"}, {code: "1f561", name: "clock face six-thirty"}, {code: "1f562", name: "clock face seven-thirty"}, {code: "1f563", name: "clock face eight-thirty"}, {code: "1f564", name: "clock face nine-thirty"}, {code: "1f565", name: "clock face ten-thirty"}, {code: "1f566", name: "clock face eleven-thirty"}, {code: "1f567", name: "clock face twelve-thirty"}, {code: "1f5fb", name: "mount fuji"}, {code: "1f5fc", name: "tokyo tower"}, {code: "1f5fd", name: "statue of liberty"}, {code: "1f5fe", name: "silhouette of japan"}, {code: "1f5ff", name: "moyai"}, {code: "1f600", name: "grinning face"}, {code: "1f601", name: "grinning face with smiling eyes"}, {code: "1f602", name: "face with tears of joy"}, {code: "1f603", name: "smiling face with open mouth"}, {code: "1f604", name: "smiling face with open mouth and smiling eyes"}, {code: "1f605", name: "smiling face with open mouth and cold sweat"}, {code: "1f606", name: "smiling face with open mouth and tightly-closed eyes"}, {code: "1f607", name: "smiling face with halo"}, {code: "1f608", name: "smiling face with horns"}, {code: "1f609", name: "winking face"}, {code: "1f60a", name: "smiling face with smiling eyes"}, {code: "1f60b", name: "face savouring delicious food"}, {code: "1f60c", name: "relieved face"}, {code: "1f60d", name: "smiling face with heart-shaped eyes"}, {code: "1f60e", name: "smiling face with sunglasses"}, {code: "1f60f", name: "smirking face"}, {code: "1f610", name: "neutral face"}, {code: "1f611", name: "expressionless face"}, {code: "1f612", name: "unamused face"}, {code: "1f613", name: "face with cold sweat"}, {code: "1f614", name: "pensive face"}, {code: "1f615", name: "confused face"}, {code: "1f616", name: "confounded face"}, {code: "1f617", name: "kissing face"}, {code: "1f618", name: "face throwing a kiss"}, {code: "1f619", name: "kissing face with smiling eyes"}, {code: "1f61a", name: "kissing face with closed eyes"}, {code: "1f61b", name: "face with stuck-out tongue"}, {code: "1f61c", name: "face with stuck-out tongue and winking eye"}, {code: "1f61d", name: "face with stuck-out tongue and tightly-closed eyes"}, {code: "1f61e", name: "disappointed face"}, {code: "1f61f", name: "worried face"}, {code: "1f620", name: "angry face"}, {code: "1f621", name: "pouting face"}, {code: "1f622", name: "crying face"}, {code: "1f623", name: "persevering face"}, {code: "1f624", name: "face with look of triumph"}, {code: "1f625", name: "disappointed but relieved face"}, {code: "1f626", name: "frowning face with open mouth"}, {code: "1f627", name: "anguished face"}, {code: "1f628", name: "fearful face"}, {code: "1f629", name: "weary face"}, {code: "1f62a", name: "sleepy face"}, {code: "1f62b", name: "tired face"}, {code: "1f62c", name: "grimacing face"}, {code: "1f62d", name: "loudly crying face"}, {code: "1f62e", name: "face with open mouth"}, {code: "1f62f", name: "hushed face"}, {code: "1f630", name: "face with open mouth and cold sweat"}, {code: "1f631", name: "face screaming in fear"}, {code: "1f632", name: "astonished face"}, {code: "1f633", name: "flushed face"}, {code: "1f634", name: "sleeping face"}, {code: "1f635", name: "dizzy face"}, {code: "1f636", name: "face without mouth"}, {code: "1f637", name: "face with medical mask"}, {code: "1f638", name: "grinning cat face with smiling eyes"}, {code: "1f639", name: "cat face with tears of joy"}, {code: "1f63a", name: "smiling cat face with open mouth"}, {code: "1f63b", name: "smiling cat face with heart-shaped eyes"}, {code: "1f63c", name: "cat face with wry smile"}, {code: "1f63d", name: "kissing cat face with closed eyes"}, {code: "1f63e", name: "pouting cat face"}, {code: "1f63f", name: "crying cat face"}, {code: "1f640", name: "weary cat face"}, {code: "1f645", name: "face with no good gesture"}, {code: "1f646", name: "face with ok gesture"}, {code: "1f647", name: "person bowing deeply"}, {code: "1f648", name: "see-no-evil monkey"}, {code: "1f649", name: "hear-no-evil monkey"}, {code: "1f64a", name: "speak-no-evil monkey"}, {code: "1f64b", name: "happy person raising one hand"}, {code: "1f64c", name: "person raising both hands in celebration"}, {code: "1f64d", name: "person frowning"}, {code: "1f64e", name: "person with pouting face"}, {code: "1f64f", name: "person with folded hands"}, {code: "1f680", name: "rocket"}, {code: "1f681", name: "helicopter"}, {code: "1f682", name: "steam locomotive"}, {code: "1f683", name: "railway car"}, {code: "1f684", name: "high-speed train"}, {code: "1f685", name: "high-speed train with bullet nose"}, {code: "1f686", name: "train"}, {code: "1f687", name: "metro"}, {code: "1f688", name: "light rail"}, {code: "1f689", name: "station"}, {code: "1f68a", name: "tram"}, {code: "1f68b", name: "tram car"}, {code: "1f68c", name: "bus"}, {code: "1f68d", name: "oncoming bus"}, {code: "1f68e", name: "trolleybus"}, {code: "1f68f", name: "bus stop"}, {code: "1f690", name: "minibus"}, {code: "1f691", name: "ambulance"}, {code: "1f692", name: "fire engine"}, {code: "1f693", name: "police car"}, {code: "1f694", name: "oncoming police car"}, {code: "1f695", name: "taxi"}, {code: "1f696", name: "oncoming taxi"}, {code: "1f697", name: "automobile"}, {code: "1f698", name: "oncoming automobile"}, {code: "1f699", name: "recreational vehicle"}, {code: "1f69a", name: "delivery truck"}, {code: "1f69b", name: "articulated lorry"}, {code: "1f69c", name: "tractor"}, {code: "1f69d", name: "monorail"}, {code: "1f69e", name: "mountain railway"}, {code: "1f69f", name: "suspension railway"}, {code: "1f6a0", name: "mountain cableway"}, {code: "1f6a1", name: "aerial tramway"}, {code: "1f6a2", name: "ship"}, {code: "1f6a3", name: "rowboat"}, {code: "1f6a4", name: "speedboat"}, {code: "1f6a5", name: "horizontal traffic light"}, {code: "1f6a6", name: "vertical traffic light"}, {code: "1f6a7", name: "construction sign"}, {code: "1f6a8", name: "police cars revolving light"}, {code: "1f6a9", name: "triangular flag on post"}, {code: "1f6aa", name: "door"}, {code: "1f6ab", name: "no entry sign"}, {code: "1f6ac", name: "smoking symbol"}, {code: "1f6ad", name: "no smoking symbol"}, {code: "1f6ae", name: "put litter in its place symbol"}, {code: "1f6af", name: "do not litter symbol"}, {code: "1f6b0", name: "potable water symbol"}, {code: "1f6b1", name: "non-potable water symbol"}, {code: "1f6b2", name: "bicycle"}, {code: "1f6b3", name: "no bicycles"}, {code: "1f6b4", name: "bicyclist"}, {code: "1f6b5", name: "mountain bicyclist"}, {code: "1f6b6", name: "pedestrian"}, {code: "1f6b7", name: "no pedestrians"}, {code: "1f6b8", name: "children crossing"}, {code: "1f6b9", name: "mens symbol"}, {code: "1f6ba", name: "womens symbol"}, {code: "1f6bb", name: "restroom"}, {code: "1f6bc", name: "baby symbol"}, {code: "1f6bd", name: "toilet"}, {code: "1f6be", name: "water closet"}, {code: "1f6bf", name: "shower"}, {code: "1f6c0", name: "bath"}, {code: "1f6c1", name: "bathtub"}, {code: "1f6c2", name: "passport control"}, {code: "1f6c3", name: "customs"}, {code: "1f6c4", name: "baggage claim"}, {code: "1f6c5", name: "left luggage"}, {code: "203c", name: "double exclamation mark"}, {code: "21a9", name: "leftwards arrow with hook"}, {code: "21aa", name: "rightwards arrow with hook"}, {code: "231a", name: "watch"}, {code: "231b", name: "hourglass"}, {code: "23ea", name: "black left-pointing double triangle"}, {code: "23eb", name: "black up-pointing double triangle"}, {code: "23ec", name: "black down-pointing double triangle"}, {code: "23f0", name: "alarm clock"}, {code: "23f3", name: "hourglass with flowing sand"}, {code: "24c2", name: "circled latin capital letter m"}, {code: "25aa", name: "black small square"}, {code: "25ab", name: "white small square"}, {code: "25b6", name: "black right-pointing triangle"}, {code: "25c0", name: "black left-pointing triangle"}, {code: "25fb", name: "white medium square"}, {code: "25fc", name: "black medium square"}, {code: "25fd", name: "white medium small square"}, {code: "25fe", name: "black medium small square"}, {code: "260e", name: "black telephone"}, {code: "261d", name: "white up pointing index"}, {code: "263a", name: "white smiling face"}, {code: "264a", name: "gemini"}, {code: "264b", name: "cancer"}, {code: "264c", name: "leo"}, {code: "264d", name: "virgo"}, {code: "264e", name: "libra"}, {code: "264f", name: "scorpius"}, {code: "267b", name: "black universal recycling symbol"}, {code: "267f", name: "wheelchair symbol"}, {code: "26a0", name: "warning sign"}, {code: "26a1", name: "high voltage sign"}, {code: "26aa", name: "medium white circle"}, {code: "26ab", name: "medium black circle"}, {code: "26bd", name: "soccer ball"}, {code: "26be", name: "baseball"}, {code: "26c4", name: "snowman without snow"}, {code: "26c5", name: "sun behind cloud"}, {code: "26ce", name: "ophiuchus"}, {code: "26d4", name: "no entry"}, {code: "26ea", name: "church"}, {code: "26f2", name: "fountain"}, {code: "26f3", name: "flag in hole"}, {code: "26f5", name: "sailboat"}, {code: "26fa", name: "tent"}, {code: "26fd", name: "fuel pump"}, {code: "270a", name: "raised fist"}, {code: "270b", name: "raised hand"}, {code: "270c", name: "victory hand"}, {code: "270f", name: "pencil"}, {code: "274c", name: "cross mark"}, {code: "274e", name: "negative squared cross mark"}, {code: "27a1", name: "black rightwards arrow"}, {code: "27b0", name: "curly loop"}, {code: "27bf", name: "double curly loop"}, {code: "2b05", name: "leftwards black arrow"}, {code: "2b06", name: "upwards black arrow"}, {code: "2b07", name: "downwards black arrow"}, {code: "2b1b", name: "black large square"}, {code: "2b1c", name: "white large square"}, {code: "2b50", name: "white medium star"}, {code: "2b55", name: "heavy large circle"}, {code: "303d", name: "part alternation mark"}, {code: "2.30e+10", name: "black right-pointing double triangle"}, {code: "2049", name: "exclamation question mark"}, {code: "2122", name: "trade mark sign"}, {code: "2139", name: "information source"}, {code: "2194", name: "left right arrow"}, {code: "2195", name: "up down arrow"}, {code: "2196", name: "north west arrow"}, {code: "2197", name: "north east arrow"}, {code: "2198", name: "south east arrow"}, {code: "2199", name: "south west arrow"}, {code: "2600", name: "black sun with rays"}, {code: "2601", name: "cloud"}, {code: "2611", name: "ballot box with check"}, {code: "2614", name: "umbrella with rain drops"}, {code: "2615", name: "hot beverage"}, {code: "2648", name: "aries"}, {code: "2649", name: "taurus"}, {code: "2650", name: "sagittarius"}, {code: "2651", name: "capricorn"}, {code: "2652", name: "aquarius"}, {code: "2653", name: "pisces"}, {code: "2660", name: "black spade suit"}, {code: "2663", name: "black club suit"}, {code: "2665", name: "black heart suit"}, {code: "2666", name: "black diamond suit"}, {code: "2668", name: "hot springs"}, {code: "2693", name: "anchor"}, {code: "2702", name: "black scissors"}, {code: "2705", name: "white heavy check mark"}, {code: "2708", name: "airplane"}, {code: "2709", name: "envelope"}, {code: "2712", name: "black nib"}, {code: "2714", name: "heavy check mark"}, {code: "2716", name: "heavy multiplication x"}, {code: "2728", name: "sparkles"}, {code: "2733", name: "eight spoked asterisk"}, {code: "2734", name: "eight pointed black star"}, {code: "2744", name: "snowflake"}, {code: "2747", name: "sparkle"}, {code: "2753", name: "black question mark ornament"}, {code: "2754", name: "white question mark ornament"}, {code: "2755", name: "white exclamation mark ornament"}, {code: "2757", name: "heavy exclamation mark symbol"}, {code: "2764", name: "heavy black heart"}, {code: "2795", name: "heavy plus sign"}, {code: "2796", name: "heavy minus sign"}, {code: "2797", name: "heavy division sign"}, {code: "2934", name: "arrow pointing rightwards then curving upwards"}, {code: "2935", name: "arrow pointing rightwards then curving downwards"}, {code: "3030", name: "wavy dash"}, {code: "3297", name: "circled ideograph congratulation"}, {code: "3299", name: "circled ideograph secret"}];

// Components
var SearchForm = {
  template: "#search-form-template",

  data: function() {
    return {
      loading: true,
      emojiName: ''
    };
  },

  mounted: function() {
    var _vm = this;

    this.$nextTick(function() {
      TweenMax.to($('.fade-slide-in-after-render'), 1, { opacity: 1, y: 0 });

      var emojies = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: emojiBank,
        limit: 20
      });

      function emojiesWithDefaults(q, sync) {
        if (q === '') {
          sync([
            { code: '1f602', name: 'face with tears of joy' },
            { code: '1f1fa-1f1f8', name: 'regional indicator symbol letters us' },
            { code: '1f4a9', name: 'pile of poo' }
          ]);
        } else {
          emojies.search(q, sync);
        }
      }

      $('.main-search').typeahead({
        highlight: true,
        minLength: 0,
        hint: true
      },
      {
        name: 'emojies',
        display: 'name',
        source: emojiesWithDefaults,
        limit: 20,
        templates: {
          suggestion: _.template('<div><img src="images/emoji/<%- code %>.png" class="tt-icon"> <%- name %></div>')
        }
      }).bind('typeahead:select', function(ev, suggestion) {
        if (_vm.emojiName == suggestion.name) {
          return false;
        }

        _vm.loading = true;

        if ((['emoji-view']).indexOf(_vm.$route.name) >= 0) {
          _vm.loading = false;
          router.push({ name: 'emoji-view', params: { emojiId: suggestion.code, duration: _vm.$route.params.duration || '1hr' }});
        } else {
          TweenMax.to($('.gradient-bg'), 0.7, { bottom: $(window).height() - 85, ease: Expo.easeOut });
          TweenMax.to($('.search-form'), 0.7, { y: -26, ease: Expo.easeOut, onComplete: function() {
            router.push({ name: 'emoji-view', params: { emojiId: suggestion.code, duration: _vm.$route.params.duration || '1hr' }});
          }});
        }
      });;
    });
  }
};

var SearchHomePage = {
  template: "#search-home-page-template",

  components: {
    'search-form': SearchForm
  },

  created: function() {
    var _vm = this;

    this.$nextTick(function() {
      _vm.$refs.emojiSearch.loading = false;
    });
  }
};


var EmojiViewPage = {
  template: "#view-emoji-page-template",

  data: function() {
    return {
      rendered: true,
      chart: null,
      chartData: {},
      currentDuration: this.$route.params.duration || '1hr',
      errorPresent: false,
      emojiPrice: null
    };
  },

  created: function() {
    var _vm = this;

    $.ajax({
      url: 'http://159.203.166.251:5555/charts?id=' + _vm.emojiId,

      success: function(data) {
        var graphData = JSON.parse(data);
        _vm.chartData = graphData;

        _vm.$nextTick(function() {
          _vm.$refs.emojiSearch.loading = false;
          _vm.$refs.emojiSearch.emojiName = graphData.name.toLowerCase();

          _vm.emojiPrice = _.last(graphData['30min'][1]).toFixed(2);

          var containerHeight = $('.emoji-chart').outerHeight();

          _vm.chart = new Chart($('.emoji-chart')[0], {
            type: 'line',
            data: {
              labels: _vm.formatDates(graphData[_vm.currentDuration][0]),
              datasets: [{
                data: graphData[_vm.currentDuration][1],
                borderColor: "#FE835D",
                fill: false,
                borderWidth: 4,
                borderJoinStyle: 'round',
                lineTension: 0,
                pointRadius: 0
              }]
            },
            options: {
              maintainAspectRatio: false,
              responsive: true,
              legend: { display: false },
              scales: {
                xAxes: [{
                  gridLines: {
                    color: "#253E5D",
                    zeroLineColor: "#1C324A",
                    borderDash: [2, 1]
                  },
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 36,
                    fontColor: '#80A2CC'
                  }
                }],
                yAxes: [{
                  gridLines: {
                    color:"#253E5D",
                    zeroLineColor:"#1C324A",
                    borderDash: [2, 1]
                  },
                  ticks: {
                    fontColor: '#80A2CC'
                  }
                }],
              }
            }
          });



          // _vm.chart = new Chartist.Line('.ct-chart', {
          //   labels: _vm.formatDates(graphData[_vm.currentDuration][0]),
          //   series: [
          //     graphData[_vm.currentDuration][1]
          //   ]
          // }, {
          //   axisX: {
          //     labelInterpolationFnc: function skipLabels(value, index) {
          //       if (['max', '1day'].indexOf(_vm.currentDuration) < 0) {
          //         return value;
          //       } else {
          //         return index % 5  === 0 ? value : null;
          //       }
          //     }
          //   },

          //   axisY: {
          //     labelInterpolationFnc: function skipLabels(value, index) {
          //       return index % 2  === 0 ? value : null;
          //     }
          //   },

          //   fullWidth: true,
          //   height: containerHeight + 'px',
          //   showPoint: false,

          //   chartPadding: {
          //     right: 56,
          //     top: 55,
          //     bottom: 48,
          //     left: 54
          //   },

          //   lineSmooth: Chartist.Interpolation.cardinal({
          //     tension: 0
          //   })
          // });

          // _vm.chart.on('draw', function(data) {
          //   if(data.type === 'line' || data.type === 'area') {
          //     data.element.animate({
          //       d: {
          //         begin: 2000 * data.index,
          //         dur: 900,
          //         from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
          //         to: data.path.clone().stringify(),
          //         easing: Chartist.Svg.Easing.easeOutQuint
          //       }
          //     });
          //   }
          // });

          TweenMax.to($('.fade-in-after-render'), 0.3, { opacity: 1 });
        });
      },

      error: function(error) {
        _vm.errorPresent = true;
        _vm.$refs.emojiSearch.loading = false;
        $('.loading-symbol').remove();
      }
    });
  },

  methods: {
    formatDates: function(dates) {
      return _.map(dates, function(date, index) {
        if (index > 0 && moment(date).format("M/D") == moment(dates[index - 1]).format("M/D")) {
          return moment(date).format("h:mma");
        } else {
          return moment(date).format("M/D - h:mma");
        }
      });
    }
  },

  computed: {
    emojiId: function() {
      return this.$route.params.emojiId;
    }
  },

  components: {
    'search-form': SearchForm
  }
};

// Routes
var router = new VueRouter({
  routes: [
    { path: '/', name: 'search', component: SearchHomePage },
    { path: '/emoji/:emojiId/:duration', name: 'emoji-view', component: EmojiViewPage }
  ]
});

// Main app
var EmojiTrade = new Vue({
  el: "#emoji-trade",
  router: router
});
