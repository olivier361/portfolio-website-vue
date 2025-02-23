// i18n: English Localization - ProjectsView component

/* eslint-disable @stylistic/max-len */
export default {
  en: {
    title: 'Projects',
    section: {
      gameDev: 'Game Development',
      softwareDev: 'Software & App Development',
    },
    project1: {
      title: 'Project 1',
      introParaPart1: `
        One or two sentence paragraphs describing the section in general.
        EX: I've been making games in Unity since 2020.
        Below are a handful of game prototypes I have made.
      `,
      introParaPart2: `
        A few more lines of text for these cards to be a bit longer.
        These cards will have a "view all" button to open and close
        the details of the card below the thich white line.
      `,
    },
    unity: {
      title: 'Unity Games',
      introPara1: `
        In 2019, I released an educational web game for the
      `,
      introPara2: `
        non-profit organization using GameMaker Studio. The following year,
        I started learning Unity to take advantage of the game engine's physics system
        in my future projects and become comfortable with using industry standard tools.
      `,
      introPara3: `
        Since then, I have created a handful of 2D and 3D game prototypes in Unity
        and gained experience with the engine's core features. In doing so,
        I've been continuously strengthening my knowledge of C# programming
        and experimenting with various gameplay mechanics and game design concepts.
      `,
      previewImg: {
        caption1: 'A 2D platformer prototype with a complete character movement controller.',
        caption2: `
          An "auto-runner" style game where the player must avoid colliding
          with incoming obstacles until reaching the finish line.
        `,
        caption3: `
          A 2D top-down adventure game prototype featuring enemies,
          NPC dialogue, and particle effects.
        `,
        altText1: 'A colorful 16-bit 2D platformer featuring a fox character.',
        altText2: 'The red cube character colliding with multiple grey obstacle blocks on a green pathway.',
        altText3: 'A top-down 2D game featuring multiple fantasy characters walking in a prototype level.',
      },
      details1: {
        title: '2D Platformer Prototype',
        para1: `
          This prototype for a 2D platformer features a full character controller
          and implements physics and collisions with various objects within the test levels.
        `,
        para2: `
          The game which is built using sprites and tile maps also uses Unity's customisable
          camera system and animation state graphs for character animations.
        `,
        altText1: 'A view of the Unity Editor showing the 2D platformer prototype in a game window, a character animation graph, and the scene view.',
      },
      details2: {
        title: 'Auto-Runner Cube Game',
        para1: `
          This is a prototype of a 3D auto-runner style game featuring a handful of levels.
          When starting a level, the red cube character automatically moves forward
          and it is up to the player to move the red cube left or right to dodge
          the continuous waves of incoming obstacles. The longer you survive,
          the higher your score! Survive long enough and you'll unlock new levels.
        `,
        para2: `
          The game also features a fully implemented menu and UI system,
          along with an Audio Manager to control game music and sounds.
        `,
        relatedLinks1: 'View “Cube Game” on GitHub',
        altText1: 'A view of the Unity Editor showing the Cube Game in a game window and the scene view which is zoomed out to show the layout of the full level.',
      },
      details3: {
        title: "Ruby's Adventure Course",
        para1: `
          While following a course on Unity fundamentals in 2020, I made a top-down adventure game prototype
          which includes a full movement and attack system for both the main character and enemy characters.
          It also implements features like spatial audio, a particle system for special effects,
          UI for gameplay and menus, an NPC dialogue system, and a character health and damage system.
        `,
        relatedLinks1: "View “Ruby's Adventure” on GitHub",
        altText1: "A view of the Unity Editor showing the scene view of a prototype level in the Ruby's Adventure game along with an animation graph and configurations for the player character.",
      },
    },
    previousGames: {
      title: 'Previous Game Releases',
      introPara1: 'Carnet de Jeux (French Educational Game):',
      introPara2: `
        An interactive educational web game for kids to help them learn French
        while uncovering the story behind one of Victoria's most important
        historical figures for the French community.
      `,
      introPara3: `
        From 2017 to 2019, I volunteered to develop a kids educational web game
        for the
      `,
      introPara4: `
        Société francophone de Victoria
      `,
      introPara5: `
        non-profit organization.
      `,
      introPara6: `
        As part of the organization's three year "Carnet de jeux" project
        which aimed to release three paper activity booklets in the classrooms of
        local french-immersion schools for kids aged 6 to 11, an accompanying web game
        was also developed and published on the organization's website.
      `,
      introPara7: `
        The goal of both the web game and the paper booklets was to help kids aged 6 to 11
        learn French and discover the history behind three influential figures that helped
        form the French community in Victoria throughout the past centuries.
      `,
      introPara8: `
        * Myself and the Société francophone de Victoria would like to thank
        Canadian Heritage for helping fund this project.
      `,
      relatedLinks1: 'Click here to play the game!',
      relatedLinks2: 'Read the related magazine article.',
      relatedLinks3: 'Learn more about the Société francophone de Victoria.',
      previewImg: {
        caption1: `
          The main menu features sketchbook-styled art
          made by the project's artists.
        `,
        caption2: `
          An interactive puzzle with various difficulty options available.
        `,
        caption3: `
          Find the right way out of the maze using
          Pac-Man style controls to assemble a secret word.
        `,
        altText1: "The game's main menu featuring sketchbook-styled art of a canoe riding the waves in the foreground with an old world map serving as the background.",
        altText2: 'A view of the puzzle mini-game showing 16 shuffled pieces on the game board and a preview image of the final result in the top right corner.',
        altText3: "A view of the Pac-Man style maze mini-game. The maze has a paper white background and letters are scattered throughout the maze's many corridors.",
      },
      details1: {
        title: 'About the Game',
        para1: `
          "Carnet de jeux: Modeste Demers" is a companion web game to the second activity booklet
          in the collection. This interactive game challenges kids to uncover
          the name of one of Victoria's most important historical figures for the French community.
          By unlocking a series of clues while playing through a handful of puzzles, enigmas,
          and answering multiple-choice questions, more information
          about the life of the mysterious historical figure will progressively be revealed.
        `,
        para2: `
          Parents and teachers are encouraged to play along with their kids or students
          in this approximately twenty minute long, fully-narrated, game as they guide them
          through any language barriers and make them reflect on
          the information they have learned.
        `,
        para3: `
          Below are a few screenshots from some of the mini-games found within the web game:
        `,
        imgCollection: {
          caption1: 'The fully-voiced dialog allows players of all ages to improve their French.',
          caption2: 'Various multiple-choice questions provide a way to learn historical tidbits.',
          caption3: 'Solving the puzzle reveals the name of an object needed in the following mini-game.',
          altText1: 'One of the characters in the canoe is introducing the game to the player through a large comic book style speech bubble with text.',
          altText2: 'A sample multiple-choice question screen. The question is written at the top and there are four answer choices below.',
          altText3: 'A view of the puzzle mini-game showing 16 shuffled pieces on the game board and a preview image of the final result in the top right corner.',
        },
      },
      details2: {
        title: 'Collaborating with Artists & Stakeholders',
        para1: `
          The “Carnet de jeux” web game was developed in tandem with its
          paper activity booklet counterpart. As such, the game makes use of the same
          sketchbook art style that was decided upon by the project's artists
          for the activity booklet. The art was hand drawn on paper to accurately depict
          a sketchbook look and then digitally scanned for the game.
          Thanks to regular collaboration and coordination with the artists,
          they were able to draw the art on paper as separate layers so that some elements
          could be dynamically animated in the web game. Additionally, thanks to various meetings
          with the stakeholders of the activity booklet team, we were able to conceptualize
          ways to adapt the paper booklet games into multiple mini-games that would ultimately
          provide players with similar historical anecdotes and clues to uncover
          the name of the mysterious historical figure.
        `,
        caption1: `
          The front cover of the paper activity booklet. Translation:
          "Activity Booklet - Discover the mystery historical character!"
        `,
        altText1: 'The front cover of the activity booklet. The green title at the top reads "Carnet de jeux" and the cover image depicts an old world map.',
      },
      details3: {
        title: 'Technical Details',
        para1: `
          This HTML5 web game was made using GameMaker Studio and its GML object-oriented
          programming language. At the time in 2017, this choice was made because of GameMaker's
          ease of use for making 2D web games and my familiarity with the engine
          when I was in high-school. Other tools used include using GIMP image editing software
          to further edit the scanned art for use as game assets and Audacity
          for recording and editing voice lines.
        `,
        buttonText: 'Play the Game in your Browser!',
      },
    },
    computerAnimAndRender: {
      title: 'Computer Animation & Rendering',
      introPara1: `
        Since 2022, I have developed multiple computer animation and graphics rendering
        projects, all done natively in C++. These projects range from building a 
      `,
      introPara2: 'ray tracing',
      introPara3: ' image rendering program using optimizations like a ',
      introPara4: 'BVH AABB Tree',
      introPara5: `
         structure to others like animating a skeleton
         drawing hand-written words on a blackboard using 
      `,
      introPara6: 'inverse kinematics',
      introPara7: ' and ',
      introPara8: 'splines',
      introPara9: '.',
      introPara10: `
        Below are a few sample screenshots of these projects.
        You'll find even more projects like my OpenGL Tetris game
        by clicking on the “View Details” button below.
      `,
      previewImg: {
        caption1: `
          A 3D Model of a dragon with nearly 1 million triangles
          ray traced with reflections thanks to BVH optimizations.
        `,
        caption2: `
          A humanoid skeleton drawing on a blackboard
          by using inverse kinematics on a spline.
        `,
        caption3: `
          A classic Tetris game made with C++ and OpenGL in Linux.
        `,
        altText1: 'A detailed 3D model of a dragon. The dragon is green and shiny. Around the dragon are some green reflective spheres on which we can see reflections of the dragon.',
        altText2: 'A flat wiremesh outline of a human is drawing the word "Hello" on a blackboard. Each arm joint is depicted by a red circle.',
        altText3: 'A Tetris board with multiple blocks clumsily stacked. A red block is currently falling. The game window has a blue background and instructions on how to play are on the left of the board with the score on the right.',
      },
      details1: {
        title: 'Graphical Rendering',
        para1: `
          This section outlines a few examples of the graphics rendering work I have done in C++.
        `,
        para2: 'Ray-Traced Rendering & Reflections:',
        para3: `
          Here are some sample images generated by my ray-traced rendering program.
          In the image below, the entire scene and the shadows created by the four spotlights
          above are all rendered using ray tracing.
        `,
        para4: `
          The second image is the result of adding ray-traced reflections and making
          each object very reflective. The reflections here have a bounce recursion depth of five,
          making it possible to observe reflections within reflections. Lastly, this image also
          applies Cubic Perlin Noise to the green sphere to give it a textured look.
        `,
        para5: `
          While all this ray tracing computation works well for spheres, it becomes demanding
          to run on 3D models with millions of triangles such as the dragon in the image below.
          For this, I introduced a Bounding Volume Hierarchy (BVH) structure
          (in this case an AABB Tree) which helps the program find which triangles collide
          with rays much more efficiently. This makes rendering speeds hundreds of times faster,
          making rendering complex models more feasible.
        `,
        para6: `
          We can now even add reflections to our complex model
          without a significant performance hit.
        `,
        para7: 'Raster Rendering & Per-Vertex Shading:',
        para8: `
          The bunny images below are rendered using my rasterization program.
          Here, per-vertex shading uses the normals of the model's vertices to
          smoothly blend the shading of each triangle face. This trick allows the model
          to look much more realistic, even if the actual triangle count of the model
          is fairly low. The two images below highlight this improvement:
        `,
        relatedLinks1: 'View "Raytracer-AABB-Tree" on GitHub.',
        caption1: `
          The bunny model rendered using per-vertex shading.
        `,
        caption2: `
          The bunny model using flat shading makes its low triangle count more apparent.
        `,
        altText1: 'A ray traced render of multiple grey spheres resting on a flat surface and casting shadows on it. There is a green sphere on the left with a checkerboard texture.',
        altText2: 'The same grey spheres now with reflections. Every sphere is reflected on one another. The green sphere now has a smooth blend of green and black spots from the Perlin Noise.',
        altText3: 'A detailed 3D model of a dragon. The dragon is green with shadowed regions. The dragon is casting multiple shadows on the ground due to the many spotlights above.',
        altText4: 'The same detailed 3D model of a dragon. The dragon is green and now reflective. Around the dragon are some green reflective spheres on which we can see reflections of the dragon.',
        altText5: 'A GIF of a rotating 3D model of a bunny. The bunny is grey and has a smooth shading gradient across its surface.',
        altText6: 'The same bunny model using flat shading. Each triangle on the model has constant shading across its surface making the triangles more apparent.',
      },
      details2: {
        title: 'Computer Animation',
        para1: `
          In addition to creating image rendering programs in C++, I have also done some
          computer animation work by implementing algorithms for a spring mass system
          and for inverse kinematics.
        `,
        para2: 'Spring Mass System:',
        para3: `
          The implemented spring mass system allows users to add an arbitrary amount of
          particles and springs, choose how they should connect together,
          and set individual physical properties for each spring.
        `,
        para4: 'Inverse Kinematics:',
        para5: `
          This Inverse Kinematics program features a humanoid skeleton setup with various joints.
          The wall present in the scene has a blackboard which can be used to display splines
          loaded from a file. The humanoid skeleton will then proceed to draw the spline
          on the blackboard using inverse kinematics to guide his right arm
          into following the spline that was loaded.
        `,
        imgCollection1: {
          caption1: 'A cube made of springs currently at rest.',
          caption2: 'A cube made of springs after having just been dropped on the ground.',
          altText1: 'A rendered wiremesh cube made of springs connected between each possible combination of vertices. The cube is at rest on a black surface.',
          altText2: 'A rendered wiremesh cube made of springs that is deformed and squished from having just been dropped on the ground.',
        },
        imgCollection2: {
          caption1: `
            IK human at rest position with a spline reading “hello” loaded on the blackboard.
          `,
          caption2: `
            The IK human starting to draw/follow the spline with his right arm.
          `,
          caption3: `
            Another view of the IK human drawing a spline that reads “animation”.
          `,
          altText1: 'A flat wiremesh outline of a human at rest position in from of a blackboard with the spline "hello" drawn on it. Each arm joint is depicted by a red circle.',
          altText2: 'The wiremesh human now has his right arm following the spline "hello" on the blackboard.',
          altText3: 'A side view of the wiremesh human drawing a spline that reads "animation" on the blackboard.',
        },
      },
      details3: {
        title: 'Tetris Game with OpenGL',
        para1: 'Using C++ with legacy ',
        para2: 'OpenGL',
        para3: ' and ',
        para4: 'GLUT',
        para5: `
          libraries, I created a classic Tetris game for Linux and Windows.
          The game includes basic niceties like pausing the game and keeping track of your score,
          the total amount of lines cleared, and your overall high score.
        `,
        para6: `
          The big focus of this project was on code quality, readability,
          and following object-oriented programming best practices for designing the codebase
          with objects and classes. Interfaces were also carefully created for the
          graphic functions so that the choice of graphical libraries can be easily changed
          without requiring any changes to the gameplay logic code.
        `,
        relatedLinks1: 'View the “cpp-tetris” code on GitHub.',
        relatedLinks2: 'Watch the video demo and presentation on YouTube.',
        caption1: 'A screenshot of my C++ Tetris game.',
        altText1: 'A Tetris board with multiple blocks clumsily stacked. A red block is currently falling. The game window has a blue background and instructions on how to play are on the left of the board with the score on the right.',
      },
    },
    modelling3D: {
      title: '3D Modelling',
      introPara1: `
        Since 2014, I have completed two 3D modelling courses using SketchUp and Blender.
        The projects below mostly focus on object modelling and low-poly environment design.
        An emphasis is placed on architecture, urban planning, and being true to scale
        to the real life locations they represent.
      `,
      previewImg: {
        caption1: `
          A 1:1 Scale re-imagining of the Oak Bay Marina in Victoria if it were a park.
        `,
        caption2: `
          A floor-plan accurate recreation of the Fifty-Fifty Arts Collective building
          and the surrounding area.
        `,
        caption3: `
          Various everyday objects modelled to scale.
        `,
        altText1: 'A zoomed out top view of the re-imagined Oak Bay Marina park 3D environment. A parking lot, walking paths through trees, a playground, and a water fountain with park benches can be seen.',
        altText2: 'A zoomed out view of the 3D environment of the Fifty-Fifty Arts Collective building and the surrounding area. Golf carts can be seen driving on the street. There is also a parking lot and a mini-golf course along with picnic tables.',
        altText3: 'An assortment of 3D models of to-scale everyday objects. From left to right: a human for scale, a tall orange traffic cone, a small traffic cone, a lamp with shade, a pencil, a disposable coffee cup, a wine bottle, and a metal door with large glass panels.',
      },
      details1: {
        title: 'Oak Bay Marina Environment',
        para1: `
          This is a 1:1 scale recreation of the Oak Bay Marina in Victoria made using SketchUp.
          This model reimagines the largely underutilized marina parking lot into an enjoyable
          public space. I modelled both the environment and all the 3D models used within.
        `,
        para2: `
          Below is a comparison of the current real-life location against my 3D model:
        `,
        imgCollection1: {
          caption1: 'Google Maps view of the Oak Bay Marina.',
          caption2: `
            My 3D model of a reimagined Oak Bay Marina superimposed over the Google Map image.
          `,
          altText1: 'A Google Maps satellite view of the Oak Bay Marina. A large, mostly empty, parking lot takes up most of the space of the marina grounds.',
          altText2: 'A 3D model of a re-imagined marina superimposed over the Google Maps image. The parking lot is now a park with walking paths, trees, a playground, and a water fountain.',
        },
        buttonText: 'View this Location in Google Maps',
        imgFrame: {
          caption1: 'Overview of the full 1:1 scale Oak Bay Marina 3D environment.',
          altText1: 'A zoomed out top view of the re-imagined Oak Bay Marina park 3D environment. A parking lot, walking paths through trees, a playground, and a water fountain with park benches can be seen.',
        },
        imgCollection2: {
          caption1: 'View of the Oak Bay Marina entrance and parking lot.',
          caption2: `
            The trail surrounding the park includes benches and picnic tables,
            along with a view of the playground.
          `,
          caption3: 'Overview of the various trails, the playground, and the small pond.',
          caption4: `
            A plaza featuring a fountain with an abstract sculpture
            and benches giving a view of the ocean.
          `,
          altText1: 'A view of the 3D models parking lot. It now takes only a fraction of the marina space. A wooden sign with white contour at the road entrance reads "Oak Bay Marina Park".',
          altText2: "A view of the park's walking trails. 3D models of benches, picnic tables, trees, and lamp posts can be seen. The playground is visible in the background.",
          altText3: 'An aerial view of the park showing the walking trails, the playground with volleyball courts, and a small pond surrounded by trees.',
          altText4: 'At the end of the breakwater, a plaza with a fountain and abstract sculpture is surrounded by benches. The plaza is elevated and has large stairs surrounded by water basins leading up to it.',
        },
      },
      details2: {
        title: 'Fifty-Fifty Arts Collective Remodelled',
        para1: `
          This is another 1:1 scale recreation of a real-life location following
          the same idea of enhancing an existing public space. It features the
          Fifty-Fifty Arts Collective building in Victoria modelled to scale using
          their actual building plan and the surrounding Douglas street area.
        `,
        buttonText: 'View this Location in Google Maps',
        imgCollection: {
          caption1: `
            Overview of the Fifty-Fifty Arts Collective building and Douglas street environment.
          `,
          caption2: 'Early modelling work on the buildings showing their interiors.',
          caption3: 'A work-in-progress model of a golf cart used to decorate the streets.',
          caption4: `
            Work-in-progress modelling of various objects such as a clock, doors,
            and components for the golf cart.
          `,
          altText1: 'A zoomed out view of the 3D environment of the Fifty-Fifty Arts Collective building and the surrounding area. Golf carts can be seen driving on the street. There is also a parking lot and a mini-golf course along with picnic tables.',
          altText2: 'An early version of the environment showing the buildings with their roofs raised to show the interior rooms.',
          altText3: 'A 3D model of a white golf cart on the street. Many mesuring guide lines are present to help with the modelling.',
          altText4: 'A staging area for various work in progress 3D models. An analog clock face, billboards, doors, and a golf cart are being built.',
        },
      },
      details3: {
        title: 'Everyday Objects',
        para1: `
          Below are a few samples of an assortment of everyday objects
          I've modelled using SketchUp. Some of these objects are used
          in the 3D environments showcased above.
        `,
        imgCollection: {
          altText1: 'An assortment of 3D models of to-scale everyday objects. From left to right: a human for scale, a tall orange traffic cone, a small traffic cone, a lamp with shade, a pencil, a disposable coffee cup, a wine bottle, and a metal door with large glass panels.',
          altText2: 'More 3D models of everyday objects. From left to right: a human for scale, a pedestrian crossing sign, a wooden park bench, a bike rack, a bolard, and a classic street lamp.',
          altText3: 'A model of a living room furnished with black chairs, wooden coffee tables, a wooden kitchen table with bar stools, a bookshelf, and two large wooden french doors with glass motifs.',
          altText4: 'Top view of the same living room model. Behind the couch and chairs are three tall windows. There are some abstract art pieces on the walls.',
          altText5: 'Close-up view of the wooden coffee table and kitchen table. The kitchen table has tapered legs and the coffee table makes use of rabbet and dado joints to interlock wood pieces.',
          altText6: 'A 3D model of a white video projector. The lens is made of multiple pieces of convex glass. A control panel with buttons can be seen at the top and multiple vents are on all sides of the projector.',
        },
      },
    },
    uhub: {
      title: 'UHub App',
      introPara1: `
        The UHub app is a centralized platform to discover and explore resources on
        university campuses made for iOS and Android using React Native.
      `,
      introPara2: `
        As a team of four University of Victoria students, we set out to solve
        a problem many students face on campus daily:
        the lack of easy ways to find resources and information on various disjoint campus services.
        Notably, we first wanted to tackle food outlets which do not always document
        their menus, ingredients, or daily specials.
      `,
      introPara3: `
        With the UHub app, students can find the locations of food outlets on campus,
        browse their menus, and see crowdsourced data on daily specials.
        With various search options available to find specific food items, dietary restrictions,
        and more, UHub removes the stress of finding what to eat on campus.
      `,
      introPara4: `
        Thanks to UHub, students can stop googling for lackluster campus resources
        and find everything they need in a centralized user-friendly experience.
      `,
      previewImg: {
        caption1: `
          Promotional images from our Instagram campaign to get students to beta test our app.
        `,
        caption2: `
          Find the location of all food vendors on the campus map,
          check their business hours, and browse their menu.
        `,
        caption3: `
          Instantly search from all food items on campus
          and filter by dietary restrictions and buildings.
        `,
        altText1: 'A UHub app promotional image showing the app logo, a slogan which reads "Find food on campus fast!", and a message that reads "Download the app today on iOS and Android". There is a screenshot of the app showing a food outlet\'s location on the map and it\'s menu.',
        altText2: 'A screenshot of the app showing a map of food outlet locations on the top of the screen. The bottom half shows the menu of a food outlet called the Chopbox. The image header reads: "Browse the menu for all food vendors".',
        altText3: 'A screenshot of the app showing the search feature. There is a search bar at the top where the user has typed "salad". Below are a list of results from multiple food outlets. Below the search bar are filter buttons for dietary restrictions, building locations, and open now.',
      },
      details1: {
        title: 'Key Features',
        para1: `
          UHub allows students to quickly get detailed information about food outlets on campus
          and their menus. Furthermore, verified student accounts can contribute to the community
          by “liking” their favorite foods so others know what's good.
          Additionally, they can even snap a picture of a food outlet's daily specials menu and
          ChatGPT will analyse the image in the backend and convert it into
          a searchable menu item for the day within the app.
        `,
        para2: 'Overall, UHub allows students to',
        list1: {
          item1: 'discover and explore food outlets on campus with a fully interactive map',
          item2: 'browse detailed menus of food outlets',
          item3: 'see dietary restriction information',
          item4: 'search the menu of all food outlets simultaneously',
          item5: 'filter results by dietary restrictions, buildings, and open hours',
          item6: "view an outlet's hours of operation",
          item7: 'contribute or view the crowd-sourced menu of the day',
          item8: 'like their favorite foods so other students know what is popular.',
        },
        para3: 'Additional planned features include',
        list2: {
          item1: 'viewing currently available study spaces on campus',
          item2: 'showing microwave locations on the map',
          item3: 'Showing upcoming events on the map.',
        },
        para4: 'You can download the UHub app for yourself from the UHub product page.',
        buttonText: 'Go to the UHub Product Page',
      },
      details2: {
        title: 'Development Process & Technical Details',
        para1: `
          The UHub app was created for Android and iOS using a React Native frontend
          with Google Maps API integration and a Firebase backend which stores the menu and
          user generated content. The adjacent architecture diagram outlines this at a high level.
        `,
        caption1: 'High-level architecture diagram for the UHub codebase.',
        altText1: 'An architecture diagram showing the React Native frontend communicating with the Google Maps API and Firebase backend storing data and images. A self-hosted server handles OTP and the crowdsourced Daily Soup Menu.',
        para2: `
          Beyond the technical details of the project, lots of planning and research was also done
          regarding the business potential of the idea and consulting with students to refine
          our user experience and determine which features to prioritize.
        `,
        para3: `
          This includes building out user personas based on the interviews we conducted
          in our user discovery process and even manually testing out the viability of
          our value proposition before starting to code by creating an Instagram account
          that would post pictures of the daily specials menu to see if there was interest
          among students for that type of information.
        `,
        para4: `
          More details about the app's development process can be found over on our
          GitHub repository Wiki which includes UI mockups, user studies, personas,
          business pitch presentations, dev logs, and more!
        `,
        buttonText: 'Read More on Our Wiki!',
        relatedLinks1: 'View the code on GitHub.',
        relatedLinks2: 'Visit our Product Landing Page.',
        relatedLinks3: 'Find More Development Info on Our Wiki.',
      },
    },
    dayTrading: {
      title: 'Day Trading App',
      introPara1: `
        In 2023, I built a mock stock trading application as part of a team of three students
        to practice implementing a robust backend server which makes use of Docker containers
        to run a microservice infrastructure.
      `,
      introPara2: `
        The goal of the project was to build a scalable and resilient microservice architecture
        that can handle thousands of simultaneous user requests with a minimal performance impact
        while also implementing redundancy and error handling to avoid server downtime.
      `,
      introPara3: `
        This was done using tech like NGINX, Redis, MongoDB, Node.js, and React, among others.
      `,
      previewImg: {
        caption1: 'UI mockup of our client-side web dashboard for stock trading.',
        altText1: 'A UI mockup of the Day Trading client web dashboard. The dashboard has sections showing the account balance, a list of owned stocks, and recent transactions.',
      },
    },
  },
};
