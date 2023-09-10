# Bun Core Graphics

The main idea of this project is to make something similar than [NodeCG](https://node.dev) but full compatible with Bun. Anyway the idea is not to provide something 100% compatible with it, but something that can be used to create graphics for live streaming and control them.

# Ideas and goals

**IMPORTANT**: This project is still in development, so it's not ready to be used yet in fact there is no code yet that can be used.

## How it should work

The idea is not to use bundles as NodeCG does, but to use a single project with multiple graphics in the same way as you do websites with any framework.

It wont be any real difference between graphics and dasboards as NodeCG does. In fact we will call graphics scenes with the difference that we will provide and standard way to change scenes and to control them. Would be nice to have the posibility of view permantly one scene but also has any special path to offer this kind of control as you can do with OBS or any other hardware & software.

## How information should be exchanged between graphics and the server

The idea is to use a websocket connection and Server Side Events to exchange information between the server and the graphics. The server will be the responsible of keep the information sync between all the graphics and the graphics will be the responsible of render the information.

Websockets is necessary because maybe a user want to transfer information from client, for example a webcam. Probably is not the most common use case but maybe sometimes is a good point.

Server Sent Events should be reserved for those use cases where unidirectional information is required, like switching scenes.

For all of this will be a good idea replicate NodeCG idea and inject some js code to provide an easy way to use all of this. This can be done with [HTMLRewriter](https://bun.sh/docs/api/html-rewriter) that it is implemented in Bun.

## How to create a page/endpoint

Bun has a [FilesystemRouter](https://bun.sh/docs/api/file-system-router) API that can be used to render pages. Probably we will need to use common directory for scenes if we want to be able of exchange them or declare them as switchable scenes (I do this last with NodeCG but it is tedious).

## Architecture

I am not advanced developer so here I will listen at any that offers help. Probably main idea should be rewritten for sure in the future.

## Upload files

It is neccessary and elemental provide a way to upload assets to server and maybe provide components to show and control all this files. I do not want to provide default Dashboard as NodeCG does, but I want to provide a way to create them easily. Is a catalog of components a good idea?

## Positioning elements

Provide optional standard css to postion elements in the screen.

## Future ideas

- Authentication and authorization.
- Multiuser/single user graphics. This means make multiaccount and control independently each one by each user. This will make easier to do services like Overlay, Streamlabs...
- Play music.
- Timeline to play animations, scenes and videos.
- Standard graphics for show information like questions, titles to introduce people.
- Standard Scoreboard and stopwatch.
- Components as overlays and position them in the screen.
- Viewtransitions to swtich scenes.
- Transitions and animations for elements and components? Should this be done by devs that use buncg or should we provide something?
- Support for Stream Deck or similar.

## Roadmap from nothing to 1.0

- [ ] Create a binary to execute and use as server as you do with nextjs and similar frameworks.
- [ ] Middleware for scenes/pages/endpoints and inject javascript code.
- [ ] Client/Server easy way to exchange information (this means develop the javascript that will be injected).
- [ ] Position elements in the screen.
- [ ] Upload files.
- [ ] Change between scenes when served from special endpoint.
- [ ] Authentication and authorization.
- [ ] Explore Viewtransitions and make possible to use transitions when switching scenes.

## Technologies

Related shoftware that will be used to do all of this:

- [Bun](https://bun.sh)
- [Elysia](https://elysiajs.com)
- Typescript or JSDoc, not sure yet.

We won't provide support for NodeJS, the idea is to use Bun entirely with its pros and cons.
