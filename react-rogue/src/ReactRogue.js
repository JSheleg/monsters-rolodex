import React, { useRef, useEffect, useState } from 'react';
import InputManager from './InputManager';
import Player from './Player';
import World from './World';

const ReactRogue =({width, height, tilesize}) => {
    const canvasRef = useRef();
    const [player, setPlayer] = useState(new Player(1,2,tilesize));
    const [world, setWorld] = useState(new World(width, height,tilesize));
    let inputManager = new InputManager();
    const handleInput = (action, data) =>{
        console.log(`handle input: ${action}:${JSON.stringify(data)}`)
        let newPlayer = new Player();
        Object.assign(newPlayer, player);
        newPlayer.move(data.x, data.y);
        // newPlayer.x += data.x * tilesize;
        // newPlayer.y += data.y * tilesize;
        setPlayer(newPlayer);
    }

    useEffect(() => {
        console.log('Bind input');
        inputManager.bindKeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe();
        }
    })

    useEffect(() =>{
        console.log("Draw to canvas");
        const ctx = canvasRef.current.getContext('2d');
        //draw directly to canvas
        ctx.clearRect(0,0, width *tilesize, height*tilesize);
        // ctx.fillStyle='#000';
        // ctx.fillRect(player.x, player.y, 16,16);
        //draw world before drawing player
        world.draw(ctx);
        player.draw(ctx);
    });
    return(
        <canvas
            ref = {canvasRef}
            width={width * tilesize} 
            height={height * tilesize} 
            style={{border: "1px solid black"}}
        ></canvas>
    );
}

export default ReactRogue;