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
    },
  },
};
