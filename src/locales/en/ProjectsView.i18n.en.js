// i18n: English Localization - ProjectsView component

/* eslint-disable @stylistic/max-len */
export default {
  en: {
    title: 'Projects',
    section: {
      gameDev: 'Game Development',
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
    },
  },
};
