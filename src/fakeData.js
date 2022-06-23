
const courses =[
    {
        id:1,
        courseName: 'Home Firearm Safety Courses',
        shortDescription: 'Non-shooting course that teaches students the basic knowledge and skills to explain the attitude necessary for the safe handling and storage of firearms/ammunition in the home.',
        moreDetails: 'This is a four-hour course for safe gun handling that is conducted in the classroom only. Students are taught NRA’s three rules for safe gun handling; primary causes of firearm accidents; firearm parts; how to unload certain action types; ammunition components; cleaning; care; safe storage of firearms in the home; and the benefits of becoming an active participant in the shooting sports. Students will receive the NRA Home Firearm Safety handbook, NRA Gun Safety Rules brochure, Basic Firearm Training Program brochure, and course completion certificate.',
        courseThumb: 'https://images5.alphacoders.com/322/thumb-1920-322185.jpg',
        courseFee: 50
    },
    {
        id:2,
        courseName: 'Defensive Pistol Course',
        shortDescription: 'This course teaches the knowledge, skills, and attitude to carry and use a concealed pistol ethically, responsibly and with confidence.',
        moreDetails: 'The NRA Defensive Pistol Course will focus on the techniques needed to develop a defensive mindset. The goal of the course will be to develop the knowledge, skills, and attitude necessary to carry and use a concealed pistol ethically, responsibly and with confidence. As a result of participating in this course, the student will be able to explain and demonstrate the following: how to apply the NRA Rules for Safe Gun Handling when carrying a concealed firearm; basic principles of concealment; the difference between cover and concealment; drawing from the holster; levels of mental awareness; developing the proper mindset when using a pistol for personal protection; clearing common stoppages; use of pocket pistols; and more. Students will receive the NRA Guide to the Basics Of Personal Protection Outside The Home handbook, NRA Gun Safety Rules brochure and the NRA Defensive Pistol certificate. This course is only conducted by NRA certified Advanced Pistol Instructors.',
        courseThumb: 'https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        courseFee: 100
    },
    {
        id:3,
        courseName: 'Basics Of Pistol Shooting',
        shortDescription: 'The NRA Basics of Pistol Shooting is intended for all individuals regardless of previous shooting experience or NRA-affiliation and is available for delivery in two ways. One option is the traditional, instructor-led course where you will receive direct instruction from an NRA-certified instructor from beginning to end. The other option has two components: a self-study or “eLearning module” which is completed online in your own timeframe and a hands-on practical portion conducted in a classroom and shooting range with an Instructor.',
        moreDetails: 'Instructor Led Only Training: The Instructor Led Only takes place in a traditional classroom and range environment. This course may be completed in a single day format or over several days with smaller blocks of instruction. To sign up for the Instructor Led Only click on the “Find A Course” icon. This opens the Course Listing page where you will select the Basics of Pistol Shooting-Instructor Led and scroll to the bottom of the page to enter details that refine the search criteria to generate a list of available courses. After selecting a course you will enter your information in the registration fields. The course Instructor will contact you shortly thereafter. Blended Training: The Blended training format provides students the flexibility to complete a significant portion of the course in an eLearning environment, prior to arriving for the classroom and range session with an NRA Certified Instructor. You can find the NRA Basics of Pistol Shooting Blended course in the same manner as above. When you register for the blended course, you’ll create a unique username and password. The instructor will provide you with a Course Control Code and directions to complete the self-study portion of the course prior to class date. More Details: Course topics include: gun safety rules, proper operation of revolvers and semi-automatic pistols, ammunition knowledge and selection, pistol selection and storage, shooting fundamentals, pistol inspection and maintenance, marksmanship, and shooting range safety. Additionally, students will complete live fire training and a nationally standardized shooting qualification while on the range with an NRA Certified Instructor. Students will receive the NRA Guide: Basics of Pistol Shooting handbook, take a Basics of Pistol Shooting Student Examination and receive a course completion certificate bearing the signature of the NRA Secretary and your NRA Certified Instructor.',
        courseThumb: 'https://images.unsplash.com/photo-1594232352231-11a0958d131c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        courseFee: 290
    },
    {
        id:4,
        courseName: 'Basic Rifle Shooting Course',
        shortDescription: 'This course teaches the basic knowledge, skills and attitude necessary for the safe use of a rifle in target shooting.',
        moreDetails: 'This course is at least eight hours long and includes classroom and range time learning to shoot rifles. Students learn NRA’s rules for safe gun handling; rifle parts and operation; ammunition; shooting fundamentals; range rules; shooting from the bench rest, prone, sitting, standing and kneeling positions; cleaning; and continued opportunities for skill development. Students will receive the Basics of Rifle Shooting handbook, NRA Gun Safety Rules brochure, Winchester/NRA Marksmanship Qualification booklet, take a Basics of Rifle Shooting Student Examination, and receive a course completion certificate.',
        courseThumb: 'https://images.unsplash.com/photo-1585589266882-2cb137ba7db6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
        courseFee: 340
    },
    {
        id:5,
        courseName: 'Shotgun Training Course',
        shortDescription: 'This course teaches the basic knowledge, skills, and attitude for the safe and proper use of a shotgun in shooting a moving target.',
        moreDetails: 'This course is at least 10 hours long and includes classroom and range time learning how to shoot shotguns at moving targets. Students learn NRA’s rules for safe gun handling; shotgun parts and operation; shotgun shell components; shotgun shell malfunctions; shooting fundamentals; range rules; shooting at straight away and angled targets; cleaning; and continued opportunities for skill development. Students will receive the Basics of Shotgun Shooting handbook, NRA Gun Safety Rules brochure, Winchester/NRA Marksmanship Qualification booklet, take a Basics of Shotgun Shooting Student Examination, and receive a course completion certificate.',
        courseThumb: 'https://images.unsplash.com/photo-1517651468335-5164984ba2c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80',
        courseFee: 730
    },
    {
        id:6,
        courseName: 'Personal Protection Course',
        shortDescription: 'This course teaches the basic knowledge, skills, and attitude essential to the safe and efficient use of a handgun for protection of self and family, and provides information on the law-abiding individual’s right to self-defense.',
        moreDetails: 'This is an eight-hour course. Students should expect to shoot approximately 100 rounds of ammunition. Students will learn basic defensive shooting skills; strategies for home safety and responding to a violent confrontation; firearms and the law; how to choose a handgun for self-defense; and continued opportunities for skill development. Students will receive the NRA Guide to the Basics of Personal Protection In The Home handbook, NRA Gun Safety Rules brochure, the Winchester/NRA Marksmanship Qualification booklet, and course completion certificate.',
        courseThumb: 'https://images.unsplash.com/photo-1523822050965-9c9f5813560c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        courseFee: 450
    },
    {
        id:7,
        courseName: 'Combat Carbine',
        shortDescription: 'The objective of this course is to increase the existing individual skills of each student in techniques and procedures of the Redback One combat shooting system. Students will be introduced to the most current concepts and skills designed to increase weapons handling efficiency, target acquisition, engagement speed, and accuracy while maintaining a focus on the combat application of each drill.',
        moreDetails: `This course of instruction was developed to improve current competencies in combat shooting, and to increase individual lethality and survivability.



        Students will be trained in the techniques and procedures of the Redback One Combat Shooting System which presents students with cutting edge training in safe weapons handling and combat marksmanship to increase individual lethality. Our methodology promotes good combat behaviors to enhance survivability which is reinforced through realistic training drills, purposeful practice and repetition.
        
        
        
        This course provides students will critical skills in combat shooting and weapons handling that is specific to operating in close quarters environments as well as urban shooting skills and longer ranges. The close quarters marksmanship includes rifle presentations, rifle to pistol transitions, individual recovery drills, shooting while moving, trigger management, sight management and recoil management as well as combat and tactical reloading procedures.
        
        
        
        The urban shooting module teaches students how to employ cover effectively and use cover tactically while engaging targets from various firing positions. Students will be trained how to safely switch shoulders and engage targets from both sides of the body, how to operate the rifle with one hand when injured and how to recognize the need for and apply a tourniquet to control hemorrhage.
        
        
        
        Students will also learn how to shoot, move and communicate in pairs during a 'rolling thunder' dynamic training iteration, developed to increase situational awareness and link elements of competency together during a realistic urban engagement scenario.`,
        courseThumb: 'https://cdn.shopify.com/s/files/1/0001/8415/6188/t/9/assets/gem20180530May051527655942combatcarbinecoursemenu.jpg',
        courseFee: 330
    },
    {
        id:8,
        courseName: 'Law Enforcement Patrol Rifle Course',
        shortDescription: 'Our Law Enforcement Patrol Rifle Course is a 3-day course that focuses on enhancing the individual skills of the officer by way of developing a better understanding of the patrol rifle and how to safely carry it, control it, handle it and operate it during training evolutions designed to create a consistent, benchmark standard for all officers within the department.',
        moreDetails: `Our Law Enforcement Patrol Rifle Course is a 3-day course that focuses on enhancing the individual skills of the officer by way of developing a better understanding of the patrol rifle and how to safely carry it, control it, handle it and operate it during training evolutions designed to create a consistent, benchmark standard for all officers within the department.



        Officers will be taken through a series of classroom lesson that have been developed in a logical sequence that introduces them to the patrol rifle. Students will receive formal lessons that cover: patrol rifle safety, why safety violations occur and how to prevent them, nomenclature and tabulated data, stripping and assembling the patrol rifle, care and maintenance and procedures to safely handle, check and clear the rifle. Lessons will continue with a marksmanship fundamentals lecture and correct zeroing procedures before moving to the range to commence the practical modules of the course.
        
        
        
        Practical lessons will cover, gear and rifle set up, loading and unloading procedures, cruiser or patrol ready, adopting correct ready positions for firing, fields of fire, fields of view and correct scanning and assessing procedures for day and night operations. During the weapons handling modules officers will learn how to conduct the immediate action drill when incurring a weapon stoppage and safely conduct a transition to the handgun. Time will be spent on rectifying common weapons stoppages including, empty magazines, failure to fire, failure to feed, failure to extract, double feeds and an introduction to the bolt override clearance procedures. Officers will be tested throughout the course using assessment standards commensurate to the level of training of the officers. Testing will include timed standards that will be graded in three categories: Speed, Accuracy and Weapons Handling Procedures. Feedback and critiques will be consistent with instructor observations and practical shooting assessments.
        
        
        
        By the end of the course officers will be more confident and more competent in the safe carriage, control, handling and operation of the patrol rifle.`,
        courseThumb: 'https://cdn.shopify.com/s/files/1/0001/8415/6188/t/9/assets/gem20180530May051527650430patrolriflecoursemenu.jpg?13561928635378052570',
        courseFee: 900
    },
    {
        id:9,
        courseName: 'Close Quarters Combat Shooting Course',
        shortDescription: 'his two day/16hr course has been developed to introduce trainees to the elements of competency of the Redback One Combat Shooting System. The course curriculum will include pistol and carbine weapons handling and marksmanship and training objectives will be focused towards completing the RB1 Operator Standards.',
        moreDetails: `This two day/16hr course has been developed to introduce trainees to the elements of competency of the Redback One Combat Shooting System. The course curriculum will include pistol and carbine weapons handling and marksmanship and training objectives will be focused towards completing the RB1 Operator Standards. 



        Trainees will be taught correct ready positions for close quarters engagements, weapon transitions including rifle to pistol and recovering from pistol back to the rifle. Trainees will be taught advanced turning procedures to engage threats from various angles, target transitions, trigger and sight management techniques to provide options based on proximity to threats, shooting while moving and recoil management drills. Trainees will be introduced to bilateral shooting skills and our methodology to identify and clear stoppages. Trainees will be assessed on their accuracy, speed and ability to apply the weapons handling procedures of the Redback One Combat Shooting System. `,
        courseThumb: 'https://cdn.shopify.com/s/files/1/0001/8415/6188/t/9/assets/gem20180530May051527715631cqsccoursemenu3.jpg?172345970773382614',
        courseFee: 685
    },
    {
        id:10,
        courseName: 'Advanced Hostage Rescue',
        shortDescription: `This course of instruction has been designed to train military and law enforcement personnel in the latest tactics, techniques and procedures to conduct successful advanced hostage rescue operations. 



        Training will include the development of individual skills in door and entry procedures and hostage rescue movement procedures through single and multi-room combat. The course  will continue with collective skills training and team based tactics in hallway movement, clearing stairwells and intersections as well as stronghold security, hostage and suspect handling and marshaling procedures. `,
        moreDetails: `his intensive 5-day/40hr course of instruction will cover the latest leading edge tactics, techniques and procedures to conduct successful barricaded hostage rescue operations. Trainees will receive formal lessons from our instructor cadre in individual skills that will cover modified door and entry procedures, noise-flash diversionary device tactics and hostage rescue room combat tactics. Collective skills will include team level, hallway procedures, stairwell procedures, deconfliction procedures, emergency action assaults, deliberate action assaults, single point and multi-points assaults, security procedures within the stronghold, hostage handling, marshalling procedures and hostage reception. This program will include reality based training that will incorporate force on force scenarios using role players and non-lethal training ammunition.



        All CQB and HRT programs are conducted at client-specified training facility utilizing our Mobile Training Team. Courses can be modified to meet training facility requirements and delivered in either live fire or with the use of non-lethal training weapons and ammunition.`,
        courseThumb: 'https://cdn.pixabay.com/photo/2016/06/09/23/45/war-1447010_960_720.jpg',
        courseFee: 300
    },
    {
        id:11,
        courseName: 'Sniper Training',
        shortDescription: 'The K&M SWAT/SRT/LE Sniper Course is a four day (40 hour) course that combines elements of our Basic, Advanced and Urban curriculum into one class. It is a fast paced course that is designed to train and prepare both novice and seasoned law enforcement snipers.',
        moreDetails: `The course begins with firearms safety and rapidly transitions into equipment comprehension, fundamentals of advanced marksmanship, ballistics, wind reading, range estimation, alternate positions, mover targets and target engagements to 1000 yards. Heavy emphasis will be placed in distances inside 400 yards.  This course will utilize the entire K&M complex, fully taking advantage of the 12 plus ranges on site. Students that complete the course will have a proficiency in firearm safety, firearm handling under stress conditions, advanced marksmanship fundamentals, a combined knowledge of their personal capabilities with their equipment and systematic training methods for future progression.

        K&M utilizes combat proven and competitively accomplished cadre. The diversification of our instructors provides a broad perspective and the best talent available from Special Operations, Law Enforcement, Military Sniper Instructors and the highest ranked Civilian PRS Competitors. This unique blend of expertise and experience, combined with a dedicated and purpose built facility, is simply unrivaled.  It allows us to offer the most efficient and professional training available. See the About Us page for more information on K&M instructors and/or the Shooting Complex page for more information.`,
        courseThumb: 'https://images.unsplash.com/photo-1521727215876-9bfe173be82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        courseFee: 550
    },
];