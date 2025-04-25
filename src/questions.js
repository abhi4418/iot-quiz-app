export const sampleQuizData = [
// Week 1
{
  question: "IoT stands for ____________.",
  options: ["Internet of Tasks", "Internet of Tuples", "Internet of Things", "None of these"],
  correct: "Internet of Things",
  explanation: "IoT stands for Internet of Things, which is the standard definition."
},
{
  question: "Which of the following technologies have unified and has resulted in the evolution of IoT?",
  options: ["High-power embedded systems", "Super Computing", "Engine Technology", "None of these"],
  correct: "None of these",
  explanation: "IoT evolved from low-power embedded systems, cloud computing, and networking, not the options listed."
},
{
  question: "Which of the following are the enables of IoT?",
  options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
  correct: "All of these",
  explanation: "RFID, nanotechnology, and sensors all enable IoT by providing connectivity and data collection."
},
{
  question: "Which of the following is NOT a function of an IoT LAN?",
  options: ["Long range communication, global", "World wide connections", "Both (a) and (b)", "Neither (a) Nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "IoT LANs are for local, short-range communication, not global or worldwide connections."
},
{
  question: "State whether the following statement is True or False. Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
  options: ["True", "False"],
  correct: "True",
  explanation: "Combining many device types in one network increases the need for unique addresses, causing address crunch."
},
{
  question: "State True or False. Statement: ‘In Multi-homing, a node/network is connected to a single network for improved reliability.’",
  options: ["True", "False"],
  correct: "False",
  explanation: "Multi-homing means connecting to multiple networks for better reliability, not just one."
},
{
  question: "Which of the following is/are the approach/approaches for multi-homing?",
  options: ["Proxy-based approach", "Gateway-based approach", "Both (a) and (b)", "None of these"],
  correct: "Both (a) and (b)",
  explanation: "Both proxy-based and gateway-based approaches are used for multi-homing in networks."
},
{
  question: "IPv6 uses ____________ notation for its representation.",
  options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
  correct: "Hexadecimal",
  explanation: "IPv6 addresses are written in hexadecimal format."
},
{
  question: "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
  options: ["False", "True"],
  correct: "True",
  explanation: "Sensor data is often sent to the cloud for storage and advanced processing."
},
{
  question: "The IPv6 notation uses ___________________ number of bits to represent an address.",
  options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "128",
  explanation: "IPv6 addresses are 128 bits long."
},
{
  question: "A sensor is -",
  options: ["Only sensitive to the measured property", "Insensitive to any other property that what the sensor is made to sense", "Both (a) and (b)", "None of these"],
  correct: "Both (a) and (b)",
  explanation: "A sensor detects only its target property and ignores unrelated properties."
},
{
  question: "We classify sensors based on -",
  options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
  correct: "None of these",
  explanation: "Sensors are classified by other criteria, not just output or data type."
},
{
  question: "Which of the following is correct statement",
  options: ["Controlling AC loads using low DC signals", "Relays are electromechanical", "Relays are actuators", "All of these"],
  correct: "All of these",
  explanation: "All statements describe relays accurately."
},
{
  question: "Based on the output, sensors are classified as _______________________ .",
  options: ["Analog", "Digital", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "Sensors can have either analog or digital outputs."
},
{
  question: "Soft actuators are -",
  options: ["Polymer-based", "Mechanical", "Electromechanical", "None of these"],
  correct: "Polymer-based",
  explanation: "Soft actuators are made from polymers, making them flexible."
},
{
  question: "Based on functionality, MQTT is a _______ protocol.",
  options: ["Transport", "Data", "Semantic", "None of these"],
  correct: "Data",
  explanation: "MQTT is a Data Protocol. See lecture 6 (Basics of IoT Networking – Part II) @ 01:30"
},
{
  question: "MQTT is designed for -",
  options: ["Remote connections", "Limited bandwidth", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "MQTT is designed for remote connections and limited bandwidth. See lecture 6 (Basics of IoT Networking – Part II) @ 03:50"
},
{
  question: "MQTT protocol follows _____________ paradigm for exchanging messages.",
  options: ["Client-Server", "Publish-Subscribe", "Both (a) and (b)", "None of these"],
  correct: "Both (a) and (b)",
  explanation: "MQTT protocol follows both Client-Server and Publish-Subscribe paradigms. See lecture 6 (Basics of IoT Networking – Part II) @ 02:00"
},
{
  question: "State True or False. Statement: ‘In MQTT, the Subscribers are Lightweight Sensors.’",
  options: ["True", "False"],
  correct: "False",
  explanation: "In MQTT, the Publishers are lightweight sensors. See lecture 6 (Basics of IoT Networking – Part II) @ 04:49"
},
{
  question: "Which of the following is MQTT component?",
  options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
  correct: "None of these",
  explanation: "Components of MQTT are Publishers, Subscribers, Brokers. See lecture 6 (Basics of IoT Networking – Part II) @ 04:50"
},
{
  question: "State True or False. A topic in MQTT can only be numbers.",
  options: ["False", "True"],
  correct: "False",
  explanation: "A topic in MQTT is a string. Book - Introduction to IoT, Cambridge University Press, Edition – 1 (2021)"
},
{
  question: "State True or False. There are only two methods specified by the MQTT protocol.",
  options: ["False", "True"],
  correct: "False",
  explanation: "There are 5 methods in MQTT protocol. See lecture 6 (Basics of IoT Networking – Part II) @ 05:49"
},
{
  question: "The Publish/Subscribe architecture in MQTT is _____________ driven.",
  options: ["Event", "Pulse", "Sound", "None of these"],
  correct: "Event",
  explanation: "Publish/Subscribe in MQTT is event-driven. See lecture 6 (Basics of IoT Networking – Part II) @ 08:32"
},
{
  question: "State True or False. The topic is the routing information for the broker.",
  options: ["True", "False"],
  correct: "True",
  explanation: "The topic is the routing information for the broker. See lecture 6 (Basics of IoT Networking – Part II) @ 08:30"
},
{
  question: "CoAP is _____________ and ____________.",
  options: ["Based on HTTP", "Is designed for M2M applications", "None of these", "Both (a) and (b)"],
  correct: "Both (a) and (b)",
  explanation: "CoAP is based on HTTP and is designed for M2M applications. See lecture 7 (Basics of IoT Networking – Part III) @ 00:49"
},
{
  question: "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
  options: ["UDP", "TCP", "IP", "XMP"],
  correct: "UDP",
  explanation: "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as UDP. See lecture 7 (Basics of IoT Networking – Part III) @ 00:50"
},
{
  question: "What is the full form of AMQP?",
  options: ["Advanced Message Querying Protocol", "Advanced Message Quality Protocol", "Advanced Message Queuing Protocol", "None of these"],
  correct: "Advanced Message Queuing Protocol",
  explanation: "Advanced Message Queuing Protocol. See lecture 7 (Basics of IoT Networking – Part IV) @ 0:55"
},
{
  question: "AMQP has _______ number of frame types.",
  options: ["6", "3", "5", "9"],
  correct: "9",
  explanation: "In AMQP there are nine frame types. See lecture 8 (Basics of IoT Networking – Part IV) @ 07:20"
},
{
  question: "State True or False. Statement: ‘The OSI model has 7 layers.’",
  options: ["True", "False"],
  correct: "True",
  explanation: "The OSI model is a conceptual framework that divides any networked communication system into seven layers. Book - Introduction to IoT, Cambridge University Press, Edition – 1 (2021)"
},
{
  question: "The ‘Destination Address’ in the IPv4 packet represents which of the following?",
  options: ["The source node address of the packet", "The intermediate hop in the network", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Neither (a) nor (b)",
  explanation: "The ‘Destination Address’ in the IPv4 packet represents the address of the destination node in the network. Book - Introduction to IoT, Cambridge University Press, Edition – 1 (2021)"
},
{
  question: "State True or False. Statement: ‘WirelessHART is the latest release of Highway Addressable Remote Transducer protocol.’",
  options: ["True", "False"],
  correct: "True",
  explanation: "WirelessHART is the latest release of Highway Addressable Remote Transducer protocol. See lecture 10 (WirelessHART) @ 01:00"
},
{
  question: "State True or False. Statement: ‘Wired HART has a network layer.’",
  options: ["True", "False"],
  correct: "False",
  explanation: "Wired HART does not have a network layer. See lecture 10 (WirelessHART) @ 02:00"
},
{
  question: "State true or false: ‘WirelessHART physical layer is derived from 802.15.2 protocol’",
  options: ["False", "True"],
  correct: "False",
  explanation: "WirelessHART physical layer is derived from 802.15.4 protocol, not 802.15.2. See lecture 10 (WirelessHART) @ 03:00"
},
{
  question: "WirelessHART operates only in __________ GHz ISM band.",
  options: ["3.7", "4.8", "4.8", "2.4"],
  correct: "2.4",
  explanation: "WirelessHART operates only in 2.4 GHz ISM band. See lecture 10 (WirelessHART) @ 04:00"
},
{
  question: "HART standard was developed from _____________ smart field devices.",
  options: ["amplified", "diminished", "isolated", "networked"],
  correct: "networked",
  explanation: "HART standard was developed from networked smart field devices. See lecture 10 (WirelessHART) @ 05:00"
},
{
  question: "Main difference between wired and unwired versions is in the physical, data link, and ______ layers.",
  options: ["Data link", "Network", "Transport", "None of these"],
  correct: "Network",
  explanation: "Main difference between wired and unwired versions is in the physical, data link, and network layers. See lecture 10 (WirelessHART) @ 06:00"
},
{
  question: "State true or false: ‘Collision free and deterministic communication is achieved in HART’s data link layer.’",
  options: ["True", "False"],
  correct: "True",
  explanation: "Collision free and deterministic communication is achieved in HART’s data link layer. See lecture 10 (WirelessHART) @ 07:00"
},
{
  question: "Channel hopping is incorporated in which layer of HART?",
  options: ["Data link layer", "Physical layer", "Application layer", "Transport layer"],
  correct: "Data link layer",
  explanation: "Channel hopping is incorporated in the data link layer of HART. See lecture 10 (WirelessHART) @ 08:00"
},
{
  question: "State True or False. Statement: ‘The HART application layer is responsible for extracting commands from a message, executing it and generating responses.’",
  options: ["True", "False"],
  correct: "True",
  explanation: "The HART application layer is responsible for extracting commands from a message, executing it and generating responses. See lecture 10 (WirelessHART) @ 09:00"
},
{
  question: "NFC is designed for use by devices within ________________ to each other.",
  options: ["Anywhere on the globe", "A small building", "Both (a) and (b)", "None of these"],
  correct: "None of these",
  explanation: "NFC is designed for use by devices within close proximity to each other. See lecture 11 (NFC) @ 01:00"
},
{
  question: "Passive NFC devices ___________ information which is _____________ by other devices.",
  options: ["contain, read", "read, contain", "contain, contain", "None of these"],
  correct: "contain, read",
  explanation: "Passive NFC devices contain information which is read by other devices. See lecture 11 (NFC) @ 02:00"
},
{
  question: "State True or False. Statement: ‘NFC devices work on the principle of magnetic induction.’",
  options: ["True", "False"],
  correct: "True",
  explanation: "NFC devices work on the principle of magnetic induction. See lecture 11 (NFC) @ 03:00"
},
{
  question: "Bluetooth technology is based on _________________.",
  options: ["HART", "ZigBee", "All of these", "None of these"],
  correct: "None of these",
  explanation: "Bluetooth technology is not based on HART or ZigBee. See lecture 12 (Bluetooth) @ 01:00"
},
{
  question: "State whether the following statement is true or false. Statement: The Link Manager Protocol in Bluetooth manages the only establishment and authentication.",
  options: ["True", "False"],
  correct: "False",
  explanation: "The Link Manager Protocol in Bluetooth manages not only establishment and authentication but also other functions. See lecture 12 (Bluetooth) @ 02:00"
},
{
  question: "Zigbee commonly uses __________data rate.",
  options: ["260 bps", "260 kbps", "260 Mbps", "None of these"],
  correct: "None of these",
  explanation: "Zigbee commonly uses a data rate of 250 kbps. See lecture 13 (Zigbee) @ 01:00"
},
{
  question: "State whether the following statement is true or false. Statement: In “AID”, a set of sensor nodes are deployed over an agricultural field.",
  options: ["True", "False"],
  correct: "True",
  explanation: "In “AID”, a set of sensor nodes are deployed over an agricultural field. See lecture 14 (AID) @ 01:00"
},
{
  question: "State True or False. Statement: Ultrasonic sensor senses the distance at which an object is located.",
  options: ["True", "False"],
  correct: "True",
  explanation: "Ultrasonic sensor senses the distance at which an object is located. See lecture 15 (Ultrasonic sensor) @ 01:00"
},
{
  question: "State true or false: In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem.",
  options: ["True", "False"],
  correct: "True",
  explanation: "In case of static sensors, where to deploy and/or activate sensors in WSN is a coverage problem. See lecture 16 (Coverage problem in WSN) @ 01:00"
},
{
  question: "State whether the following statement is true or false. Statement: Objective of coverage in WSN is to use maximum number of sensors and minimize network lifetime.",
  options: ["True", "False"],
  correct: "False",
  explanation: "The objective of coverage in WSN is to use minimum number of sensors and maximize network lifetime. See lecture 16 (Coverage problem in WSN) @ 02:00"
},
{
  question: "State whether the following statement is true or false. Statement: “A crossing is covered if it is in the interior of at least one node’s coverage disk.”",
  options: ["True", "False"],
  correct: "True",
  explanation: "A crossing is covered if it is in the interior of at least one node’s coverage disk. See lecture 16 (Coverage problem in WSN) @ 03:00"
},
{
  question: "State which of the following is/are correct for stationary wireless sensor networks.",
  options: ["Topology cannot be changed automatically.", "Node failure may result in partition of networks.", "Both (a) and (b)", "None of these"],
  correct: "Both (a) and (b)",
  explanation: "Both statements are correct: topology cannot be changed automatically and node failure may result in partition of networks. See lecture 17 (Stationary wireless sensor networks) @ 01:00"
},
{
  question: "Most problems in static WSN can be classified as -",
  options: ["No coverage", "More coverage", "Both (a) and (b)", "None of these"],
  correct: "None of these",
  explanation: "Most problems in static WSN can be classified as coverage problems. See lecture 18 (Static WSN problems) @ 01:00"
},
{
  question: "Which of the following is/are correct with respect UAV networks?",
  options: ["Multi-tasking", "Large coverage area", "Both (a) and (b)", "None of these"],
  correct: "Both (a) and (b)",
  explanation: "Both statements are correct: UAV networks are multi-tasking and have large coverage area. See lecture 19 (UAV networks) @ 01:00"
},
{
  question: "State True or False. Statement: UAV networks are scalable.",
  options: ["True", "False"],
  correct: "True",
  explanation: "UAV networks are scalable. See lecture 19 (UAV networks) @ 02:00"
},
{
  question: "In Mobile WSN, the Data Mules",
  options: ["Collect the data from sensor nodes", "Goes to the sink and delivers the collected data", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "Data Mules collect the data from sensor nodes and goes to the sink and delivers the collected data. See lecture 20 (Mobile WSN) @ 01:00"
},
{
  question: "The full form of AUV is -",
  options: ["Antenna Used Vehicle", "Autonomous Underwater Vehicle", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Autonomous Underwater Vehicle",
  explanation: "The full form of AUV is Autonomous Underwater Vehicle. See lecture 21 (AUV) @ 01:00"
},
{
  question: "Humans carry their devices and move around. Sensors embedded within the devices record readings. Sensory readings are then transmitted for processing. This paradigm of sensing is known as –",
  options: ["Machine Centric Sensing", "Device Centric Sensing", "Human Centric Sensing", "None of these"],
  correct: "Human Centric Sensing",
  explanation: "This paradigm of sensing is known as Human Centric Sensing. See lecture 22 (Human Centric Sensing) @ 01:00"
},
{
  question: "State True or False. Energy of Devices and Participant selection are not two major problems in Human Centric Sensing.",
  options: ["True", "False"],
  correct: "False",
  explanation: "Energy of Devices and Participant selection are two major problems in Human Centric Sensing. See lecture 22 (Human Centric Sensing) @ 02:00"
},
{
  question: "Which of the following network topologies is used in UAV networks?",
  options: ["Bus", "Star", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Star",
  explanation: "The network topology used in UAV networks is Star. See lecture 23 (UAV networks) @ 02:00"
},
{
  question: "State true of false. The M2M Application Platform provides integrated services based on device collected data-sets.",
  options: ["True"],
  correct: "True",
  explanation: "The M2M Application Platform provides integrated services based on device collected data-sets. See lecture 24 (M2M Application Platform) @ 01:00"
},
{
  question: "Which of the following is/are current challenges in IoT?",
  options: ["Large scale of co-operation", "Global heterogeneity", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "Both statements are correct: large scale of co-operation and global heterogeneity are current challenges in IoT. See lecture 25 (Challenges in IoT) @ 01:00"
},
{
  question: "State True or False. Statement: ‘Interoperability is not a characteristic of a product or system.’",
  options: ["True", "False"],
  correct: "False",
  explanation: "Interoperability is a characteristic of a product or system. See lecture 26 (Interoperability) @ 01:00"
},
{
  question: "Interoperability is required because",
  options: ["There are different programming languages", "There are different communication protocols", "Both (a) and (b)", "Neither (a) nor (b)"],
  correct: "Both (a) and (b)",
  explanation: "Interoperability is required because there are different programming languages and different communication protocols. See lecture 27 (Interoperability) @ 01:00"
},
{
  question: "State whether the following statement is true or false. Statement: ‘Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability.’",
  options: ["False", "True"],
  correct: "True",
  explanation: "Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for interoperability. See lecture 28 (Interoperability) @ 01:00"
},
{
  question: "State True or False. Statement: ‘The interoperability between devices and device users in terms of message formats is called Systematic Interoperability.’",
  options: ["True", "False"],
  correct: "False",
  explanation: "The interoperability between devices and device users in terms of message formats is not called Systematic Interoperability. See lecture 29 (Interoperability) @ 01:00"
},
{
  question: "What is the full form of UMB in IoT interoperability?",
  options: ["Universal Meta Bridge", "Universal Main Bridge", "Universal Main Bracket", "None of these"],
  correct: "None of these",
  explanation: "The full form of UMB in IoT interoperability is not Universal Meta Bridge, Universal Main Bridge, or Universal Main Bracket. See lecture 30 (Interoperability) @ 01:00"
},
{
  question: "State true of false. Arduino is an open-source electronic programmable board.",
  options: ["True", "False"],
  correct: "True",
  explanation: "The statement is true. Arduino is an open-source electronic programmable board."
},
{
  question: "State true or false\nAdditional electronic circuits are essential to load a program into the Arduino controller board.",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. Additional electronic circuits are not essential to load a program into the Arduino controller board."
},
{
  question: "Arduino UNO has _________ number of Digital I/O pins.",
  options: [
    "8",
    "13",
    "14",
    "None of these"
  ],
  correct: "14",
  explanation: "Arduino UNO has 14 number of Digital I/O pins."
},
{
  question: "What does the following code do?\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}\na) Blink 3 times with 1000ms ON and 500ms OFF\nb) Blink 3 times with 500ms ON and 500ms OFF\nc) Blink 3 times with 1000ms ON and 1000ms OFF\nd) Stay ON continuously",
  options: [
    "Blink 3 times with 1000ms ON and 500ms OFF",
    "Blink 3 times with 500ms ON and 500ms OFF",
    "Blink 3 times with 1000ms ON and 1000ms OFF",
    "Stay ON continuously"
  ],
  correct: "Blink 3 times with 1000ms ON and 500ms OFF",
  explanation: "The LED is turned ON for 1000ms using delay(1000). The LED is turned OFF for 500ms using delay(500). This process repeats 3 times in the for loop. Thus, the LED blinks 3 times with 1000ms ON and 500ms OFF."
},
{
  question: "How many types of loops will you find in Arduino Programming?",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  correct: "3",
  explanation: "There are 3 types of loops in Arduino Programming."
},
{
  question: "Choose the right option for if/conditional operator.",
  options: [
    "Val = (condition)?(Statement 1):(Statement 2)",
    "Val = (condition)?(Statement 2):(Statement 1)",
    "Val = (condition):(Statement 1)?(Statement 2)",
    "Val = (condition):(Statement 2)?(Statement 1)"
  ],
  correct: "Val = (condition)?(Statement 1):(Statement 2)",
  explanation: "The correct option for if/conditional operator is Val = (condition)?(Statement 1):(Statement 2)."
},
{
  question: "What is the purpose of calling dht.begin(); in the setup() function?\nA) To initialize the Serial Monitor\nB) To start communication with the DHT sensor\nC) To set the temperature and humidity values to zero\nD) To define the data pin for the sensor",
  options: [
    "To initialize the Serial Monitor",
    "To start communication with the DHT sensor",
    "To set the temperature and humidity values to zero",
    "To define the data pin for the sensor"
  ],
  correct: "To start communication with the DHT sensor",
  explanation: "Calling dht.begin(); in the setup() function starts communication with the DHT sensor."
},
{
  question: "What function is used to read the humidity value from the DHT sensor?\nA) dht.getHumidity();\nB) dht.readTemp();\nC) dht.readHumidity();\nD) dht.getTemperature();",
  options: [
    "dht.getHumidity();",
    "dht.readTemp();",
    "dht.readHumidity();",
    "dht.getTemperature();"
  ],
  correct: "dht.readHumidity();",
  explanation: "dht.readHumidity(); function is used to read the humidity value from the DHT sensor."
},
{
  question: "What function is used to set the servo motor to a specific angle?\nA) ServoDemo.move()\nB) ServoDemo.rotate()\nC) ServoDemo.write()\nD) ServoDemo.setAngle()",
  options: [
    "ServoDemo.move()",
    "ServoDemo.rotate()",
    "ServoDemo.write()",
    "ServoDemo.setAngle()"
  ],
  correct: "ServoDemo.write()",
  explanation: "ServoDemo.write() function is used to set the servo motor to a specific angle."
},
{
  question: "State True or False.\nStatement: “Python is popular for embedded application development as it is a very lightweight programming language.”",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. Python is popular for embedded application development as it is a very lightweight programming language."
},
{
  question: "State True or False.\nAdafruit provides a library to work with DHT22 Sensor.",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. Adafruit provides a library to work with DHT22 Sensor."
},
{
  question: "Consider the following piece of Python code. What is the output?\nx = [4, 5, 6]\ny = [str(x[0] + 1), str(len(x) * 2) + '&Code']\nz = y[1].split('&')\nprint(z[1])",
  options: [
    "5",
    "12",
    "Code",
    "&Code"
  ],
  correct: "Code",
  explanation: "1. x = [4, 5, 6]: A list with three elements.\n2. y = [str(x[0] + 1), str(len(x) * 2) + '&Code']:\no x[0] is 4, so x[0] + 1 is 5, and str(x[0] + 1) becomes \"5\".\no len(x) is 3, so len(x) * 2 is 6, and str(len(x) * 2) + '&Code' becomes \"6&Code\".\no Therefore, y = [\"5\", \"6&Code\"].\n3. z = y[1].split('&'):\no y[1] is \"6&Code\".\no Splitting \"6&Code\" by '&' gives ['6', 'Code'].\n4. z[1] is 'Code'.\nThus, the print(z[1]) statement outputs Code."
},
{
  question: "State True or False.\nStatement: “To indicate different blocks of code, Python follows rigid indentation.”",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. To indicate different blocks of code, Python follows rigid indentation."
},
{
  question: "What is the output of the following line of code in Python?\n>>> print “Hi, Welcome to python!”",
  options: [
    "Hi, Welcome to python!",
    "“Hi, Welcome to python!”",
    "Hi, Welcome to python",
    "None of these"
  ],
  correct: "Hi, Welcome to python!",
  explanation: "The output of the given line of code in Python is Hi, Welcome to python!"
},
{
  question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
  options: [
    "Only IP address of server",
    "Only port number",
    "Both server IP address and port number",
    "Client’s IP address"
  ],
  correct: "Both server IP address and port number",
  explanation: "During remote server access by a Raspberry Pi, the client needs both server IP address and port number."
},
{
  question: "State whether the following command to install the PIL library is correct or not.\nsudo pip install pillow",
  options: [
    "Correct",
    "Incorrect"
  ],
  correct: "Correct",
  explanation: "The command to install the PIL library is correct."
},
{
  question: "What is the purpose of the \"w\" mode in the open() function in Python?\nA) To read a file\nB) To write data to a file, overwriting existing content\nC) To append data to a file\nD) To open a file in read and write mode",
  options: [
    "To read a file",
    "To write data to a file, overwriting existing content",
    "To append data to a file",
    "To open a file in read and write mode"
  ],
  correct: "To write data to a file, overwriting existing content",
  explanation: "The \"w\" mode is used to write data to a file, overwriting existing content."
},
{
  question: "What will be the output of the given Python program when reading from the file?\nwith open(\"PythonProgram.txt\", \"w\") as file:\nfile.write(\"Writing data\")\nwith open(\"PythonProgram.txt\", \"r\") as file:\nf = file.read() print('Reading from the file\\n') print(f)",
  options: [
    "Writing data",
    "Reading from the file\nWriting data",
    "Error: File not found",
    "None of the above"
  ],
  correct: "Reading from the file\nWriting data",
  explanation: "The output of the given Python program when reading from the file is Reading from the file\nWriting data."
},
{
  question: "Can we configure Raspberry Pi as a File Server?",
  options: [
    "Yes",
    "No"
  ],
  correct: "Yes",
  explanation: "Yes, we can configure Raspberry Pi as a File Server."
},
{
  question: "Which command is used to configure the Raspberry Pi for the camera module?\nA) sudo camera-config\nB) sudo raspi-config\nC) sudo enable-camera\nD) sudo pi-setup",
  options: [
    "sudo camera-config",
    "sudo raspi-config",
    "sudo enable-camera",
    "sudo pi-setup"
  ],
  correct: "sudo raspi-config",
  explanation: "The command used to configure the Raspberry Pi for the camera module is sudo raspi-config."
},
{
  question: "What is the final step after enabling the camera in the Raspberry Pi configuration?\nA) Restart the camera service\nB) Run a camera test command\nC) Reboot the Raspberry Pi\nD) Reinstall the Raspberry Pi OS",
  options: [
    "Restart the camera service",
    "Run a camera test command",
    "Reboot the Raspberry Pi",
    "Reinstall the Raspberry Pi OS"
  ],
  correct: "Reboot the Raspberry Pi",
  explanation: "The final step after enabling the camera in the Raspberry Pi configuration is to reboot the Raspberry Pi."
},
{
  question: "Which command Exits the nano editor?",
  options: [
    "Ctrl + X",
    "Ctrl + O",
    "Ctrl + K",
    "None of these"
  ],
  correct: "Ctrl + X",
  explanation: "The command that exits the nano editor is Ctrl + X."
},
{
  question: "In a temperature-controlled fan system using a relay, when should the fan turn on?\nA) When the relay is manually triggered\nB) When the surrounding temperature is lower than a predefined threshold\nC) When the surrounding temperature exceeds a predefined threshold\nD) When the battery voltage drops below a certain level",
  options: [
    "When the relay is manually triggered",
    "When the surrounding temperature is lower than a predefined threshold",
    "When the surrounding temperature exceeds a predefined threshold",
    "When the battery voltage drops below a certain level"
  ],
  correct: "When the surrounding temperature exceeds a predefined threshold",
  explanation: "In a temperature-controlled fan system using a relay, the fan should turn on when the surrounding temperature exceeds a predefined threshold."
},
{
  question: "What does the following line of code do?\nraspistillcapture -o image.jpg",
  options: [
    "Captures video feed",
    "Captures still image",
    "Both (a) and (b)",
    "None of these"
  ],
  correct: "Captures still image",
  explanation: "The line of code captures a still image."
},
{
  question: "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
  options: [
    "SocketFamily",
    "SocketType",
    "SocketName",
    "SocketProtocol"
  ],
  correct: "SocketType",
  explanation: "SOCK_STREAM refers to a type of SocketType, i.e either TCP socket or UDP socket."
},
{
  question: "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt",
  options: [
    "plt.show()",
    "plt.plot()",
    "plt.ylabel()"
  ],
  correct: "plt.ylabel()",
  explanation: "To change the label of the Y-axis while plotting a graph using matplotlib in Python, you use plt.ylabel()."
},
{
  question: "In Socket programming, the parameter AF_INET stands for ___________.",
  options: [
    "Unix protocols",
    "Internet Protocol (IP)",
    "File sharing",
    "Time slicing"
  ],
  correct: "Internet Protocol (IP)",
  explanation: "In Socket programming, the parameter AF_INET stands for Internet Protocol (IP)."
},
{
  question: "Suppose a Python server is receiving data from a socket as follows,\ndata, addr = sock.recvfrom(1024)\nWhat kind of socket ‘sock’ is being considered here.",
  options: [
    "TCP socket",
    "UDP socket",
    "TAP socket"
  ],
  correct: "UDP socket",
  explanation: "The socket ‘sock’ being considered here is a UDP socket."
},
{
  question: "What is the use of the Mobi-Flow protocol?",
  options: [
    "Enabling static SDN",
    "Enabling SDN to incorporate mobility",
    "Enabling Odin Master",
    "Enabling traditional BGP"
  ],
  correct: "Enabling SDN to incorporate mobility",
  explanation: "The use of the Mobi-Flow protocol is enabling SDN to incorporate mobility."
},
{
  question: "During remote server access using socket programming what is the utility of the <socket_name>.listen() function?",
  options: [
    "To create a new socket",
    "To bind the socket to connection",
    "To wait for clients to connect",
    "To close the connection"
  ],
  correct: "To wait for clients to connect",
  explanation: "The utility of the <socket_name>.listen() function is to wait for clients to connect."
},
{
  question: "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
  options: [
    "From controller to switch",
    "From switch to controller",
    "Between two switches",
    "Between two controllers"
  ],
  correct: "From controller to switch",
  explanation: "The correct direction for PACKET_OUT type messages in SDN is from controller to switch."
},
{
  question: "Which among the following is a limitation of the traditional non-SDN networks?",
  options: [
    "Switches do not possess routing table",
    "Switches are unable to forward traffic",
    "Switches do not have a global view of the network.",
    "All of the given"
  ],
  correct: "Switches do not have a global view of the network.",
  explanation: "A limitation of the traditional non-SDN networks is that switches do not have a global view of the network."
},
{
  question: "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
  options: [
    "Soft time-out > = hard time-out",
    "Hard time-out >= soft time-out"
  ],
  correct: "Hard time-out >= soft time-out",
  explanation: "The relation that holds is Hard time-out >= soft time-out."
},
{
  question: "Which of the following is true?",
  options: [
    "Traditional Network: Routing Table, Software Defined Network: Routing Table",
    "Traditional Network: Flow Table, Software Defined Network: Routing Table",
    "Traditional Network: Routing Table, Software Defined Network: Flow Table",
    "Traditional Network: Flow Table, Software Defined Network: Flow Table"
  ],
  correct: "Traditional Network: Routing Table, Software Defined Network: Flow Table",
  explanation: "The correct statement is Traditional Network: Routing Table, Software Defined Network: Flow Table."
},
{
  question: "Consider the following figure below. To which issue of SDN does this particular figure can be related to?",
  options: [
    "Controller placement issue",
    "Flow Rule placement issue",
    "Hardware placement issue",
    "Analysis placement issue"
  ],
  correct: "Flow Rule placement issue",
  explanation: "The issue of SDN to which this particular figure can be related to is Flow Rule placement issue."
},
{
  question: "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
  options: [
    "To communicate between the controller and switches",
    "To communicate among multiple controllers",
    "East-Westbound APIs do not exist",
    "To communicate between switches themselves."
  ],
  correct: "To communicate among multiple controllers",
  explanation: "The functionality of East-Westbound APIs is to communicate among multiple controllers."
},
{
  question: "Hierarchical SDN architecture is also known as __________ architecture.",
  options: [
    "Tree",
    "Flat",
    "Mesh",
    "Line"
  ],
  correct: "Tree",
  explanation: "Hierarchical SDN architecture is also known as Tree architecture."
},
{
  question: "Integrating SDN with IoT is not recommended and is not a suitable approach to follow",
  options: [
    "False",
    "True"
  ],
  correct: "False",
  explanation: "The statement is false. Integrating SDN with IoT is recommended and is a suitable approach to follow."
},
{
  question: "What is Sensor Openflow?",
  options: [
    "A traditional routing protocol",
    "A queue management protocol",
    "An SDN protocol tailored for IoT devices",
    "A physical connectivity protocol."
  ],
  correct: "An SDN protocol tailored for IoT devices",
  explanation: "Sensor Openflow is an SDN protocol tailored for IoT devices."
},
{
  question: "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
  options: [
    "Mobi-Flow > Conventional",
    "Mobi-Flow < Conventional",
    "Mobi-Flow = Conventional",
    "None of the given"
  ],
  correct: "Mobi-Flow < Conventional",
  explanation: "Mobi-Flow fares better in comparison to Conventional networking in terms of message overhead."
},
{
  question: "Virtual Machines came before Cloud Computing.",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. Virtual Machines came before Cloud Computing."
},
{
  question: "Private cloud services cannot provide Software-as-a-Service (SaaS).",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. Private cloud services can provide Software-as-a-Service (SaaS)."
},
{
  question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
  options: [
    "Mobility-Flow",
    "Mobile-Flow",
    "Mobi-Flow",
    "M-Flow"
  ],
  correct: "Mobi-Flow",
  explanation: "The solution for mobility-aware flow rule placement in SDIoT is Mobi-Flow."
},
{
  question: "An organization A wants to deploy a cloud infrastructure, whereby it wants to push majority of the data to a cloud whose servers can be situated anywhere within the globe, but it wants certain private data to be pushed only to cloud servers that are present on-premise and are accessible by only authenticated members of the organization. In this context which among the following deployment model should be used?",
  options: [
    "Private Cloud",
    "Public Cloud",
    "Hybrid Cloud",
    "Any of these"
  ],
  correct: "Hybrid Cloud",
  explanation: "The deployment model that should be used is Hybrid Cloud."
},
{
  question: "Which among the following is the most on-premise cloud deployment model?",
  options: [
    "Private Cloud",
    "Public cloud",
    "IaaS",
    "PaaS"
  ],
  correct: "Private Cloud",
  explanation: "The most on-premise cloud deployment model is Private Cloud."
},
{
  question: "Which of the following type of client requires constant communication/connection with the cloud server?",
  options: [
    "Thin client",
    "Thick client",
    "Both thin and thick clients",
    "None of these"
  ],
  correct: "Thin client",
  explanation: "The type of client that requires constant communication/connection with the cloud server is Thin client."
},
{
  question: "What does ‘CIA’ in cloud data security stand for?",
  options: [
    "Confidentiality, Integrity, Availability",
    "Confidentiality, Inheritance, Automation",
    "Congestion, Integrity, Authentication",
    "Criticality, Integrity, Accountability"
  ],
  correct: "Confidentiality, Integrity, Availability",
  explanation: "‘CIA’ in cloud data security stands for Confidentiality, Integrity, Availability."
},
{
  question: "When you are accessing Spotify online for listening to music from your browser without specifically installing them, which among the following cloud service models is the most appropriate one that you are using.",
  options: [
    "SaaS",
    "PaaS",
    "IaaS",
    "DaaS"
  ],
  correct: "SaaS",
  explanation: "The most appropriate cloud service model that you are using is SaaS."
},
{
  question: "With respect to Cloud Computing security, which of the following are necessary",
  options: [
    "Network Level Security but not Host Level Security",
    "Application Level Security but not Host Level Security",
    "Host Level Security but not Network Level Security",
    "All of Network, Host and Application Level Security."
  ],
  correct: "All of Network, Host and Application Level Security.",
  explanation: "All of Network, Host and Application Level Security are necessary."
},
{
  question: "Data security and client authentication is an issue in which of the following cloud service models?",
  options: [
    "SaaS",
    "SaaS and PaaS",
    "IaaS",
    "All of them"
  ],
  correct: "All of them",
  explanation: "Data security and client authentication is an issue in all of the cloud service models."
},
{
  question: "What is the role of a Hypervisor (most probable answer)?",
  options: [
    "To facilitate installation of a router",
    "To provide a platform for executing virtual machines",
    "To facilitate sensor fabrication",
    "To communicate between switches themselves."
  ],
  correct: "To provide a platform for executing virtual machines",
  explanation: "The role of a Hypervisor is to provide a platform for executing virtual machines."
},
{
  question: "Which of the following is a limitation of SaaS?",
  options: [
    "Remote software execution",
    "Platform independence",
    "Centralized control",
    "None of these."
  ],
  correct: "Centralized control",
  explanation: "A limitation of SaaS is Centralized control."
},
{
  question: "Fill in the blank.\n____________ means independent of device or location.",
  options: [
    "Scalable",
    "Reliability",
    "Agile",
    "Ubiquitous"
  ],
  correct: "Ubiquitous",
  explanation: "Ubiquitous means independent of device or location."
},
{
  question: "Which of the following is/are the advantages of cloud computing?",
  options: [
    "Elasticity",
    "Pay-per-use",
    "Self Service",
    "All of the above"
  ],
  correct: "All of the above",
  explanation: "All of the above are advantages of cloud computing."
},
{
  question: "Fill in the blanks. Fog computing is an intermediate layer between __________ and _________.",
  options: [
    "Dew and devices",
    "Cloud and devices",
    "Cloud and server"
  ],
  correct: "Cloud and devices",
  explanation: "Fog computing is an intermediate layer between Cloud and devices."
},
{
  question: "The managerial role is played by __________ in sensor-cloud architecture.",
  options: [
    "End-users",
    "Sensor-Cloud Service Provider",
    "Neither a nor b",
    "Both a and b"
  ],
  correct: "Sensor-Cloud Service Provider",
  explanation: "The managerial role is played by Sensor-Cloud Service Provider in sensor-cloud architecture."
},
{
  question: "Which of the following is not a component of OpenStack?",
  options: [
    "Suse"
  ],
  correct: "Suse",
  explanation: "Suse is not a component of OpenStack."
},
{
  question: "Who coined the term Fog computing?",
  options: [
    "IBM",
    "CISCO",
    "All of these",
    "None of these"
  ],
  correct: "CISCO",
  explanation: "The term Fog computing was coined by CISCO."
},
{
  question: "Fill in the blank. The concept of ________ enables physical hardware to be shared among multiple entities.",
  options: [
    "Hardware virtualization",
    "Software virtualization",
    "Module virtualization",
    "All of these"
  ],
  correct: "Hardware virtualization",
  explanation: "The concept of Hardware virtualization enables physical hardware to be shared among multiple entities."
},
{
  question: "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications.",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications."
},
{
  question: "In IoT, temporal sensitivity of data DOES NOT play an important role",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. In IoT, temporal sensitivity of data plays an important role."
},
{
  question: "Which among the following is NOT a component of OpenStack.",
  options: [
    "Horizon",
    "Heat",
    "Stellar",
    "Neutron"
  ],
  correct: "Stellar",
  explanation: "Stellar is not a component of OpenStack."
},
{
  question: "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
  options: [
    "Sensor monitoring",
    "Sensor instantiation",
    "Sensor virtualization"
  ],
  correct: "Sensor virtualization",
  explanation: "The principal feature of sensor clouds, with respect to sensor nodes, is Sensor virtualization."
},
{
  question: "The optimal composition of __________ is a management issue in sensor-cloud.",
  options: [
    "Logistics",
    "Pricing",
    "Caching",
    "Virtual sensor nodes"
  ],
  correct: "Virtual sensor nodes",
  explanation: "The optimal composition of Virtual sensor nodes is a management issue in sensor-cloud."
},
{
  question: "How many different types of caching mechanism are there in sensor cloud?",
  options: [
    "1",
    "4",
    "2",
    "3"
  ],
  correct: "2",
  explanation: "There are 2 different types of caching mechanism in sensor cloud."
},
{
  question: "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then a response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data transfer between the node and cloud is 10s and the data processing time at the cloud is ‘x’ seconds. It takes a total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing at the cloud. What is the value of x?",
  options: [
    "10s",
    "5s",
    "15s",
    "20s"
  ],
  correct: "5s",
  explanation: "The value of x is 5s."
},
{
  question: "Which among the following is true?",
  options: [
    "Fog computing acts as a complement to cloud computing.",
    "Fog computing is a replacement for cloud computing.",
    "Fog computing and cloud computing are the same.",
    "Fog computing is more powerful than cloud computing (with respect to resources)."
  ],
  correct: "Fog computing acts as a complement to cloud computing.",
  explanation: "The correct statement is Fog computing acts as a complement to cloud computing."
},
{
  question: "Which component of OpenStack do you use to access all the other components?",
  options: [
    "Horizon",
    "Glance",
    "Neutron",
    "None of these"
  ],
  correct: "Horizon",
  explanation: "The component of OpenStack used to access all the other components is Horizon."
},
{
  question: "Which among the following are active connected entities in a holistic smart city environment?",
  options: [
    "Police station",
    "Banks",
    "Transport centers",
    "All of the above"
  ],
  correct: "All of the above",
  explanation: "All of the above are active connected entities in a holistic smart city environment."
},
{
  question: "With the help of ICT tools, it is possible to increase and improve citizen participation for a good governance based smart city",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. With the help of ICT tools, it is possible to increase and improve citizen participation for a good governance based smart city."
},
{
  question: "Which among the following is a possible challenge with respect to smart parking lots?",
  options: [
    "Efficient auto-routing of vehicles",
    "Locating current vacant spots",
    "Auto-charging of vehicles",
    "All of the given"
  ],
  correct: "All of the given",
  explanation: "All of the given are possible challenges with respect to smart parking lots."
},
{
  question: "What refers to combining information from multiple sensor sources?",
  options: [
    "Information Collection",
    "Multi-sensor deployment",
    "Multi-sensor dissemination",
    "Multi-sensor data fusion"
  ],
  correct: "Multi-sensor data fusion",
  explanation: "Combining information from multiple sensor sources is called multi-sensor data fusion."
},
{
  question: "Fill in the blanks. The effect size for determining statistical significance is the standardized _________ difference between two groups.",
  options: [
    "Median",
    "Mean",
    "Mode",
    "Range"
  ],
  correct: "Mean",
  explanation: "Effect size is typically measured as the standardized mean difference between two groups."
},
{
  question: "Which of the following is a phase of ICV development?",
  options: [
    "Based on 2G",
    "Based on 4G LTE",
    "Vehicles connected to cloud",
    "All of these"
  ],
  correct: "All of these",
  explanation: "All of these are phases of ICV development."
},
{
  question: "With which of the following can the decision-making gap between the sensors and the actuators be bridged.",
  options: [
    "SDN",
    "OpenStack Horizon",
    "Artificial Intelligence (AI)",
    "Arduino IDE"
  ],
  correct: "Artificial Intelligence (AI)",
  explanation: "The decision-making gap between the sensors and the actuators can be bridged with Artificial Intelligence (AI)."
},
{
  question: "Which of the following statements are true about the HAN standards?\nStatement I: Physical and MAC layers are defined by IEEE802.15.4.\nStatement II: Network layer is defined by Zigbee.\nStatement III: Application layer is defined by IEEE802.15.4",
  options: [
    "Statements I and II",
    "Statements I and III",
    "Statements II and III",
    "Statements I, II and III"
  ],
  correct: "Statements I and II",
  explanation: "The correct statements are Statements I and II."
},
{
  question: "What is UPnP?",
  options: [
    "Uninterrupted Post-messaging",
    "Universal Pull Streaming",
    "Universal Plug and Play",
    "Unhindered Public Networking"
  ],
  correct: "Universal Plug and Play",
  explanation: "UPnP stands for Universal Plug and Play."
},
{
  question: "What are the disadvantages of V2X communication?",
  options: [
    "Increased traffic safety",
    "Tracking of movement",
    "Efficient use of fuel",
    "None of these"
  ],
  correct: "Tracking of movement",
  explanation: "A disadvantage of V2X communication is Tracking of movement."
},
{
  question: "Mobility of vehicles in a V2X environment limit which of the following that restricts the use of TCP/IP for V2X communication?",
  options: [
    "Communication between vehicular infrastructure",
    "Localization of data",
    "Backbone routing in IP core networks",
    "Human-vehicle interaction"
  ],
  correct: "Localization of data",
  explanation: "Mobility of vehicles in a V2X environment limits Localization of data that restricts the use of TCP/IP for V2X communication."
},
{
  question: "In VANET, link durations are long and easily scaled-up to include all the vehicles on the road?",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. In VANET, link durations are not long and easily scaled-up to include all the vehicles on the road."
},
{
  question: "CCN is derived from ICN architecture.",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. CCN is derived from ICN architecture."
},
{
  question: "In an ICV environment, efficient cooperation between different vehicles on a highway can lead to a safer scenario with respect to collision and avoiding incoming traffic.",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. Efficient cooperation between different vehicles on a highway can lead to a safer scenario with respect to collision and avoiding incoming traffic."
},
{
  question: "Which among the following is the most probable application scenario for a smart grid?",
  options: [
    "Home automation",
    "Hospital networks",
    "Intelligent power plants",
    "Crop monitoring"
  ],
  correct: "Intelligent power plants",
  explanation: "The most probable application scenario for a smart grid is Intelligent power plants."
},
{
  question: "With respect to a smart grid, which stakeholders are potentially benefitted?",
  options: [
    "Energy Service providers",
    "Energy consumers/customers",
    "Both energy service provides and consumers",
    "Neither energy service providers nor consumers."
  ],
  correct: "Both energy service provides and consumers",
  explanation: "Both energy service providers and consumers are potentially benefitted with respect to a smart grid."
},
{
  question: "It is not possible to perform load forecasting using a smart grid.",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. It is possible to perform load forecasting using a smart grid."
},
{
  question: "With respect to the following Smart Grid architecture, which among the following is the most probable utility of the IP network?",
  options: [
    "IP network has no utility",
    "IP network is used to connect smart grid components globally for seamless data transfer",
    "IP network is used for multimedia video streaming only",
    "IP network is used to induce more congestion"
  ],
  correct: "IP network is used to connect smart grid components globally for seamless data transfer",
  explanation: "The most probable utility of the IP network is to connect smart grid components globally for seamless data transfer."
},
{
  question: "Smart Home is an isolated concept and is not integrable with smart grid?",
  options: [
    "False",
    "True"
  ],
  correct: "False",
  explanation: "The statement is false. Smart Home is not an isolated concept and is integrable with smart grid."
},
{
  question: "Which of the following is a cloud application of smart grid?",
  options: [
    "Information management",
    "Energy management",
    "Security",
    "All of these"
  ],
  correct: "All of these",
  explanation: "All of these are cloud applications of smart grid."
},
{
  question: "Which of the following is not a vulnerability of Smart Grid?",
  options: [
    "Integrity",
    "Physical threats",
    "Dynamic system attacks",
    "None of these"
  ],
  correct: "None of these",
  explanation: "None of these are not vulnerabilities of Smart Grid."
},
{
  question: "IIoT corresponds to which industrial revolution?",
  options: [
    "1st",
    "2nd",
    "3rd",
    "4th"
  ],
  correct: "4th",
  explanation: "IIoT corresponds to the 4th industrial revolution."
},
{
  question: "IIoT is inherently data intensive.",
  options: [
    "Yes",
    "No"
  ],
  correct: "Yes",
  explanation: "Yes, IIoT is inherently data intensive."
},
{
  question: "Which among the following is one of the requirements and utility of IIoT?",
  options: [
    "Power plant interruption",
    "Power plant virtualization",
    "Power plant decentralization",
    "Power plant denotification"
  ],
  correct: "Power plant virtualization",
  explanation: "One of the requirements and utility of IIoT is Power plant virtualization."
},
{
  question: "Smart Grid follows which type of flow of energy?",
  options: [
    "Bidirectional",
    "Unidirectional",
    "Both a and b",
    "Neither a nor b"
  ],
  correct: "Bidirectional",
  explanation: "Smart Grid follows Bidirectional flow of energy."
},
{
  question: "What is the Flow of data?",
  options: [
    "Acquisition>Generation>Storage>Analysis",
    "Generation>Storage>Analysis>Acquisition",
    "Generation>Acquisition>Storage>Analysis",
    "None of these"
  ],
  correct: "Generation>Acquisition>Storage>Analysis",
  explanation: "The flow of data is Generation>Acquisition>Storage>Analysis."
},
{
  question: "Intelligent transport system is least likely to render which of the following connectivity?",
  options: [
    "Vehicle-to-vehicle connectivity",
    "Vehicle-to-sensor connectivity",
    "Vehicle-to-road infrastructure",
    "Vehicle-to-home connectivity"
  ],
  correct: "Vehicle-to-home connectivity",
  explanation: "Intelligent transport system is least likely to render Vehicle-to-home connectivity."
},
{
  question: "Approximately around ________ of the total data available currently in the world is unstructured.",
  options: [
    "20 %",
    "40 %",
    "60 %",
    "80%"
  ],
  correct: "80%",
  explanation: "Approximately around 80% of the total data available currently in the world is unstructured."
},
{
  question: "SQL manages ________________ data.",
  options: [
    "Unstructured",
    "Corrupt",
    "Structured",
    "Non-organized"
  ],
  correct: "Structured",
  explanation: "SQL manages Structured data."
},
{
  question: "Qualitative analysis refers to the process by which numerical data is analyzed?",
  options: [
    "True",
    "False"
  ],
  correct: "False",
  explanation: "The statement is false. Qualitative analysis does not refer to the process by which numerical data is analyzed."
},
{
  question: "Which of the following data analysis technique involve the use of study of difference of variance?",
  options: [
    "ARIMA",
    "ANOVA",
    "DNN",
    "OpenFlow"
  ],
  correct: "ANOVA",
  explanation: "The data analysis technique that involves the use of study of difference of variance is ANOVA."
},
{
  question: "Given that you have an independent variable and that you want to predict the dependent variable based on the relationship between the two variables. Which among the following technique would you use?",
  options: [
    "ANOVA",
    "ARIMA",
    "Regression Analysis",
    "Pre-analysis"
  ],
  correct: "Regression Analysis",
  explanation: "The technique you would use is Regression Analysis."
},
{
  question: "With respect to AgriSens, how many logical layers are there in its architecture?",
  options: [
    "Perception Layer",
    "Processing Layer",
    "Application Layer",
    "All of the given"
  ],
  correct: "All of the given",
  explanation: "There are three logical layers in AgriSens architecture: Perception Layer, Processing Layer, and Application Layer."
},
{
  question: "AgriSens supports real-time monitoring of soil moisture conditions and instant reporting to a dashboard.",
  options: [
    "False",
    "True"
  ],
  correct: "True",
  explanation: "The statement is true. AgriSens supports real-time monitoring of soil moisture conditions and instant reporting to a dashboard."
},
{
  question: "What is the data aggregator is also known as in the context of IoT in smart healthcare?",
  options: [
    "CPU",
    "LPU",
    "APU",
    "PPU"
  ],
  correct: "LPU",
  explanation: "The data aggregator is also known as LPU in the context of IoT in smart healthcare."
},
{
  question: "Fill in the blanks. The effect size for determining statistical significance is the standardized _________ difference between two groups.",
  options: [
    "Median",
    "Mean",
    "Mode",
    "Range"
  ],
  correct: "Mean",
  explanation: "Effect size is typically measured as the standardized mean difference between two groups."
},
{
  question: "Processing the sensed data on the device itself is known as __________ approach.",
  options: [
    "Network based",
    "In-place",
    "Out of the place",
    "None of these"
  ],
  correct: "In-place",
  explanation: "Processing the sensed data on the device itself is known as In-place approach."
},
{
  question: "Fill in the blank. Processing the handheld activity device data with artificial intelligence can be used for ________.",
  options: [
    "Fall detection",
    "Heart rate detection",
    "Vehicle detection"
  ],
  correct: "Fall detection",
  explanation: "Processing the handheld activity device data with artificial intelligence can be used for Fall detection."
},
{
  question: "Which of the following is an assumption of ANOVA?",
  options: [
    "Homogeneity of variances",
    "Normally distributed response variable",
    "Independence of observations",
    "All of these"
  ],
  correct: "All of these",
  explanation: "All of these are assumptions of ANOVA."
},
{
  question: "Select the statement(s) that denote the type of ANOVA.\nStatement I: One way analysis\nStatement II: Two way analysis\nStatement III: K-way analysis",
  options: [
    "Statement I",
    "Statement II",
    "Statements I, II, and III",
    "None of these"
  ],
  correct: "Statements I, II, and III",
  explanation: "The statements that denote the type of ANOVA are Statements I, II, and III."
},
{
  question: "AmbuSense is a privacy-aware system",
  options: [
    "True",
    "False"
  ],
  correct: "True",
  explanation: "The statement is true. AmbuSense is a privacy-aware system."
},
{
  question: "The two most relevant sensors directly used in agriculture are __________.",
  options: [
    "Soil moisture and ECG sensor",
    "Soil moisture and water level sensor",
    "ECG sensor and water level sensor",
    "All of these"
  ],
  correct: "Soil moisture and water level sensor",
  explanation: "The two most relevant sensors directly used in agriculture are Soil moisture and water level sensor."
},
{
  question: "Examples of dispersion measures include _______ and ______.",
  options: [
    "Discrete, categorical",
    "Continuous, quantitative",
    "Discrete, quantitative",
    "Range, Variance"
  ],
  correct: "Range, Variance",
  explanation: "Examples of dispersion measures include Range and Variance."
}
]