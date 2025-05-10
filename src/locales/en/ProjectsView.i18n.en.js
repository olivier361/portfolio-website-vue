// i18n: English Localization - ProjectsView component

/* eslint-disable @stylistic/max-len */
export default {
  en: {
    title: 'Projects',
    section: {
      gameDev: 'Game Development',
      softwareDev: 'Software & App Development',
      videoEditing: 'Video Editing & Production',
      graphicDesign: 'Graphic Design',
    },
    quickLinks: {
      buttonText1: 'Game Development',
      buttonText2: 'Software Development',
      buttonText3: 'Video Production',
      buttonText4: 'Graphic Design',
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
      introPara1: `
        From 2017 to 2019, I volunteered to develop a kids educational web game
        titled "Carnet de Jeux: Modeste Demers" for the
      `,
      introPara2: `
        Société francophone de Victoria
      `,
      introPara3: `
        non-profit organization.
      `,
      // \u00A0 is a non-breaking space
      introPara4: `
        As part of the organization's three year "Carnet de jeux" project
        which aimed to release three paper activity booklets in the classrooms of
        local french schools for kids aged\u00A06\u00A0to\u00A011, an accompanying web game
        was also developed and published on the organization's website.
      `,
      introPara5: `
        The goal of both the web game and paper booklets was to help kids
        learn French and uncover the story behind three historical figures that helped
        shape the French community in Victoria throughout the past centuries.
      `,
      introPara6: `
        * Myself and the Société francophone de Victoria would like to thank
        Canadian Heritage for helping fund this project.
      `,
      buttonText: 'Play the Game in your Browser!',
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
        relatedLinks1: 'Read the related magazine article.',
        relatedLinks2: 'Learn more about the Société francophone de Victoria.',
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
        relatedLinks1: 'View the “tetris-game-cpp” code on GitHub.',
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
        Thanks to the UHub app, students can find the locations of food outlets on campus,
        browse their menus, and see crowdsourced data on daily specials.
        With various search options available to find specific food items by dietary restrictions
        and more, UHub removes the stress of finding what to eat on campus.
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
      details1: {
        title: 'Functionality',
        para1: `
          The Day Trading application allows users to create a user account and start
          buying and selling fictional stocks with the fake funds they have added to their account.
          The focus of the Day Trading system is to efficiently handle thousands of
          simultaneous requests from various users, be it real users using the frontend client
          or requests sent by workload files on the admin console to perform stress tests.
        `,
        para2: 'In essence, the Day Trading servers support various operations such as',
        list1: {
          item1: 'getting a quote for the current price of a certain stock',
          item2: 'adding fictional funds to your account',
          item3: 'buying stocks using your account balance',
          item4: 'selling stocks you own',
          item5: `
            Setting triggers to automatically buy or sell stocks when it reaches a certain price.
          `,
        },
        para3: `
          To handle these operations, POST requests are sent to the server
          from either the frontend client or the admin console.
        `,
      },
      details2: {
        title: 'Architecture Details',
        para1: `
          Below is an architecture diagram which highlights what tools are used to build
          the Day Trading system and demonstrates how the microservices
          communicate with one another.
        `,
        para2: `
          In short, we have a React frontend which communicates to the server via POST requests
          to allow users to buy, sell, and get quotes for stocks. Similarly, we have
          an admin console built in Python which can be used to run workflow files that
          stress test the server by sending millions of requests from thousands of users.
          The console essentially simulates what it would be like to receive requests
          from thousands of clients simultaneously.
        `,
        para3: `
          To manage this load, requests get routed by our NGINX reverse proxy which
          evenly distributes requests to various PM2 managed server instances.
          PM2 works great for a small project like this one as it runs one server instance
          on each CPU core available and also automatically restarts any server processes
          in the event of a crash. We chose to build our transaction server logic using Node.js
          as it is pretty robust when it comes to handling events asynchronously
          from incoming requests.
        `,
        para4: `
          Another crucial aspect of this project was to implement a Redis cache to store
          recent stock price quotes. This is particularly useful as there may be many users
          asking for quotes to the same stock only mere seconds apart.
          Furthermore, our Day Trading system had to send quote requests to an
          external quote server which was purposefully throttled to simulate an old legacy system.
          This means without the Redis cache, performance of our system would otherwise be
          massively impacted by waiting for responses from the slow quote server
          whenever a user wants to get a quote or buy and sell stocks.
        `,
        para5: `
          Lastly, we used MongoDB to store user account data such as account balances,
          the stocks they own, and any automatic buy or sell triggers a user might have set.
          MongoDB was chosen because it is very scalable with its ability to shard the database
          into different clusters and partitions while maintaining good consistency.
        `,
        para6: `
          Overall, all the above mentioned microservices run in their own Docker containers
          and communicate with each other through ports within Docker's network.
          This allows the Day Trading application to be easier to scale and reduces the potential
          for a single point of failure compared to a monolithic architecture.
          Additionally, it allows the whole system to be fairly portable as the system can be run
          on any machine using a simple “docker compose up” command to launch all the services.
        `,
        para7: `
          Therefore, thanks to a combination of containerization, caching, and queuing tools used
          in combination with a NoSQL database and JavaScript based programming languages,
          we were able to make a resilient Day Trading system
          that maximizes performance and availability.
        `,
        para8: `
          For further details on our implementation, you can read our
          “Day Trading Application Architecture and Implementation” report below.
        `,
        caption1: 'An overview of the architecture of the Day Trading app.',
        altText1: 'A high-level architecture diagram showing the React frontend and Python admin console communicating with the NGINX reverse proxy which routes requests to the PM2 managed Node.js servers. These servers use a Redis cache and MongoDB database.',
        buttonText: 'Read the Full Architecture Report',
        relatedLinks1: 'View the "Day-Trading-App" codebase on GitHub.',
        relatedLinks2: `
          Read the "Day Trading Application - Architecture and Implementation" Report.
        `,
      },
    },
    ytChannel: {
      title: 'My YouTube Channel',
      introPara1: `
        For over {years}, I've been running my own YouTube channel in the gaming space.
        With more than 400+ videos produced and hundreds of community livestreams hosted,
        I've developed solid video editing and production experience since 2016.
      `,
      introPara2: `
        My YouTube channel, Skullkid Gaming (whose name originates from a fan favorite character
        seen in Zelda games), features a whole range of gaming related videos! Whether it's
        making viewers discover cool new indie games thanks to my Indie Showcase series,
        sharing my thoughts on recent games and industry news with my in-depth discussion videos,
        or chatting with our friendly community during my weekly Nintendo gaming livestreams,
        video game enthusiasts will be sure to find something they like on Skullkid Gaming!
      `,
      introPara3: `
        Overall, thanks to my channel, I have gained extensive experience in videography,
        video & photo editing, script writing, hosting & voice overs, social media marketing,
        community management, the technical know-how to run live events, and more over the years.
      `,
      buttonText: 'Visit the Channel!',
      previewImg: {
        caption1: `
          Indie Showcase is a series that highlights amazing indie games!
        `,
        caption2: `
          I make various in-depth discussion videos covering games industry news
          and game design analyses.
        `,
        caption3: `
          My weekly community livestreams are an opportunity for viewers to chat,
          have fun, and play games together.
        `,
        altText1: "A YouTube thumbnail for an episode of the Indie Showcase series about Grapple Dogs: Cosmic Canines. The game's logo and characters Pablo and Luna are featured.",
        altText2: 'A YouTube thumbnail for a discussion video about Mario Maker 2. It reads "Making Super Mario Maker 2 Better". Builder Mario can be seen gluing wings to a question mark block.',
        altText3: 'A YouTube thumbnail for a Super Mario Maker 2 livestream. There is a yellow side panel with the game\'s logo and toads playing a game with Joycons. To the right is a screenshot of a level with the text "playing YOUR levels!" on top.',
      },
      details1: {
        title: 'Video Essays & Discussions',
        para1: `
          From reviews to game retrospectives and topical gaming related news,
          my gaming discussion videos cover a wide range of topics regarding the games industry.
        `,
        para2: `
          Whether it's my unscripted thoughts on recent gaming news or one of my
          meticulously crafted scripted game retrospectives full of video edits,
          I always take great care in doing thorough research on the topics I present.
        `,
        relatedLinks1: 'View the full "Discussion Videos" Playlist on YouTube.',
        altText1: 'The YouTube banner for the Skullkid Gaming channel. The channel name is in the center surrounded by video game characters such as Tracer from Overwatch, Shovel Knight, Link from Zelda, and Builder Mario from Mario Maker.',
      },
      details2: {
        title: 'Indie Showcase Series',
        para1: `
          The Indie Showcase series is a Let's Play series that focuses on showcasing
          the opening moments of awesome games from independent developers!
        `,
        para2: `
          Throughout each video I take a look at a new indie game and share my thoughts
          and opinions about its gameplay, story, design, etc. All of this wrapped in a
          nice fun and entertaining package where viewers can easily decide
          if the game is worth their penny!
        `,
        relatedLinks1: 'View the full "Indie Showcase" Playlist on YouTube.',
      },
      details3: {
        title: 'Unboxings & Vlogs',
        para1: `
          While a good portion of my videos rely on using captured game footage,
          I also have a handful of gaming unboxing videos and vacation vlogs which have
          enabled me to gain more videography and camera experience over the years.
        `,
        relatedLinks1: 'View the full "Unboxing Videos" Playlist on YouTube.',
      },
      details4: {
        title: 'Community Livestreams',
        para1: `
          On a weekly basis, I host community livestreams where I play Nintendo games
          like Zelda, Mario Maker, or Splatoon with viewers and catch up with them in the chat.
          We also often play online games where viewers can join in on the fun directly
          with their Nintendo Switch.
        `,
        relatedLinks1: 'View the full "Livestreams" Playlist on YouTube.',
      },
    },
    videoEditor: {
      title: 'Freelance Video Editor',
      introPara1: `
        I've done some work as a freelance video editor in the past. Here are a few samples
        of videos, social media promos, and trailers I have edited for clients.
      `,
      introPara2: `
        If you are looking for a video editor for your YouTube channel, business, or project,
        please don't hesitate to reach out via my
      `,
      introPara3: ' contact page',
      introPara4: '.',
      details1: {
        title: 'For The Love Of The Game Inc.',
        para1: `
          This non-profit organisation does workshops, interviews, and events to provide training
          to youth sport coaches and promote their message of keeping sports
          fun for kids rather than being overly competitive.
        `,
        para2: `
          I edited over 40 interview and workshop teasers along with a few trailers
          for a sports summer camp which the organisation is partnered with.
          These short videos were published on the organisation's YouTube channel
          and social media pages from May 2021 to September 2021.
        `,
        para3: `
          While editing, I was in charge of creating custom intros, transitions, end cards,
          and templates that match the style of the company's branding.
          In addition, I created custom motion graphics for them such as membership subscription
          CTA animations and animated lower third banners for presenter names.
        `,
        para4: `
          Below are a few short videos which showcase these effects:
        `,
      },
    },
    flipnoteMag: {
      title: 'Flipnote Magazine',
      introPara1: `
        I have experience in graphic design both self-taught and
        thanks to a course taken at the University of Victoria.
      `,
      introPara2: `
        Flipnote Magazine is a fictional 22-page travel magazine which I created as a
        design project with Adobe InDesign. All pictures in the magazine were taken by me,
        except for the fake advertisements which are made by other UVic students.
        Additionally, the text which serves as a placeholder for this design project
        mostly comes from Wikipedia, unless indicated otherwise.
      `,
      introPara3: 'You can check out the full magazine PDF below.',
      introPara4: `
        *NOTE: All Flipnote Magazine URLs and social media handles inside the magazine
        are purely fictional and their real life counterparts have not been verified.
      `,
      buttonText: 'View the Full Magazine Issue',
      imgFrame: {
        caption1: 'The cover page of Flipnote Magazine.',
        altText1: 'The cover of Flipnote magazine features a picture of the "Chateau de Versailles" in France with a clear blue sky. The magazine title is in the top right corner and the lower third has a slanted aqua blue banner with highlights of pictures and articles found inside the magazine.',
      },
      previewImg: {
        caption1: 'The table of contents and credits spread at the start of the magazine.',
        caption2: 'A travel article template about Mont-Saint-Michel in France.',
        caption3: 'An article template designed to highlight full page bleed images.',
        altText1: 'The opening spread of the magazine features the table of contents as an aqua blue vertical banner on the left and the article text credits on the right page. There is also a navy blue text box giving details about the cover image.',
        altText2: 'A travel article about Mont-Saint-Michel. It has a three column layout with light blue borders around the page edges and large images in the first third of each page. There is a banner with three smaller images at the bottom of the right page.',
        altText3: 'An article featuring two full page bleed images. On the left page is an old growth forest with a fallen tree, and on the right page is a waterfall surrounded by trees. The article text is on a semi-transparent box in the lower third of the left page.',
      },
    },
    ytThumbnails: {
      title: 'YouTube Thumbnails',
      introPara1: `
        With more than 500+ video thumbnails created, I have over {years} of design
        experience making eye-catching thumbnails to attract viewers to my videos.
      `,
      introPara2: `
        You'll find even more thumbnail samples by clicking the “View Details” button below.
      `,
      previewImg: {
        altText1: 'A thumbnail for a Kirby Forgotten Land livestream. Kirby is in the center looking out into the distance. The word "Kirby" is written in semi-transparent bold letters spaning the whole thumbnail passing behind the character in the background',
        altText2: 'A thumbnail for a discussion video about the Nintendo Switch\'s second anniversary. This is a clipart style thumbnail showing the switch flying above the clouds on a blue sky with angel wings and a halo. The screen of the console reads "TWO YEARS" on a bright red background.',
        altText3: 'A thumbnail for a Zelda Link\'s Awakening discussion video. It reads "Hiding in Plain Sight?" with the game\'s logo. The thumbnail is black and features a magnifying glass which illuminates the game world behind it. References to Builder Link and the Oracle games can also be seen.',
      },
      details1: {
        title: 'Sample Thumbnails',
        para1: `
          Below are a few video thumbnail samples featuring
          a diverse range of styles within the gaming niche.
        `,
        para2: `
          You can find even more thumbnails I've created by browsing my catalogue
          of published videos over on my
        `,
        para3: ' YouTube channel',
        para4: '.',
        imgCollection1: {
          altText1: 'A thumbnail for a Mario Kart 8 Deluxe livestream featuring Bowser and Skullkid\'s karts clashing together. This image typically features Mario but it has been edited to show Skullkid from Zelda instead.',
          altText2: 'A thumbnail for a Kirby Forgotten Land livestream. Kirby is in the center looking out into the distance. The word "Kirby" is written in semi-transparent bold letters spaning the whole thumbnail passing behind the character in the background',
          altText3: 'A thumbnail for a Zelda Link\'s Awakening discussion video. It reads "Hiding in Plain Sight?" with the game\'s logo. The thumbnail is black and features a magnifying glass which illuminates the game world behind it. References to Builder Link and the Oracle games can also be seen.',
          altText4: 'A thumbnail for a Holiday livestream with viewers. There are three parallelogram boxes each showing a character and background for Mario Kart 8, Mario Maker 2, and Animal Crossing New Horizons games inside. The thumbnail background is light blue with snowflakes.',
          altText5: 'A thumbnail for a Bridge Constructor: Portal Indie Showcase episode. The left side shows the game\' logo and game art of stick figure characters riding a forklift through a portal. The right side shows an image of a game level featuring multiple bridges.',
          altText6: 'A thumbnail for a SteamWorld Heist Indie Showcase episode. The left side shows the game\'s logo and key characters from the game. The right side shows a game level with a robot character aiming a ricochet shot.',
          altText7: 'A thumbnail for a Zelda Tears of the Kingdom Collector\'s Edition unboxing. The left shows the game\'s logo and words "Ultimate Unboxing". Boxes for the Collector\'s Edition, Zelda edition Pro Controller, Zelda Switch case, and Amiibo are shown on the right.',
          altText8: 'A thumbnail for a Zelda Link\'s Awakening livestream. On the left is a vertical green banner with the game\'s logo and chibi versions of characters Link and Marin. On the right is an image of a chibi model of Koholint island.',
          altText9: 'A thumbnail for a Super Mario Bros Wonder livestream. On the left is a vertical white banner with the game\'s logo and characters Mario, Luigi, Peach, and Daisy. The right side features an image of the game\'s opening level showing a flower shaped tree and a beautiful blue sky.',
          altText10: 'A thumbnail for a Super Mario Maker 2 livestream. On the left is a vertical yellow banner with the game\'s logo and Builder Toad and Builder Toadette characters playing a game with Joycons. The right has a screenshot of a level and the text "playing YOUR levels!" on top.',
          altText11: 'A thumbnail for a discussion video about the Nintendo Switch\'s second anniversary. This is a clipart style thumbnail showing the switch flying above the clouds on a blue sky with angel wings and a halo. The screen of the console reads "TWO YEARS" on a bright red background.',
          altText12: 'A thumbnail for a discussion video about whether the release of the Nintendo Switch was rushed. On a bright yellow background, we see hands holding a Nintendo Switch console snapped in two at the center. Around it is written in bold black letters "WAS IT RUSHED?".',
          altText13: 'A thumbnail for a Smash Bros Ultimate discussion video. It uses the style of a classic Smash character reveal image. Where the character\'s name would typically be, we can read "Truly the Ultimate Smash Bros". On the left is character art of King K. Rool with a question mark above his head.',
          altText14: 'A thumbnail for a Smash Bros Ultimate livestream. On the left is Mario punching and kicking. There is a large black Smash emblem behind Mario. The thumbnail is otherwise white. The words "Ultimate Extravaganza" are written in black and shift to white when over the black Smash emblem.',
        },
      },
    },
    advertising: {
      title: 'Digital Advertisements',
      introPara1: `
        Below are a few samples of digital advertisements I have created
        to promote projects and products on social media and print media.
      `,
      previewImg: {
        caption1: 'Fictional ad for PaperMate pencils suitable for print media or online ads.',
        caption2: 'Promotional Instagram post to get students to beta test our UHub app.',
        caption3: 'Social media ad to promote our youtuber Discord server.',
        altText1: 'An ad for a PaperMate pencil. The ad is square with a yellow background. All we see is the image of a pencil at the center and a tagline above that reads "Got a great idea? Write it down with a PaperMate pencil!".',
        altText2: 'A UHub app promotional image showing the app logo, a slogan which reads "Find food on campus fast!", and a message that reads "Download the app today on iOS and Android". There is a screenshot of the app showing a food outlet\'s location on the map and it\'s menu.',
        altText3: 'A social media promo image for the "IndieTube Café" Discord server. We see the logo of the server to the left (a coffee cup with a blue play button on it) and text on the right that reads "Join our Discord today! A community for small Youtubers and their viewers to get together!".',
      },
    },
  },
};
