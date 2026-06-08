import { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import MatterAttractors from 'matter-attractors';
import MatterWrap from 'matter-wrap';

const MatterScene = () => {
  const sceneRef = useRef(null);

  Matter.use(MatterAttractors);
  Matter.use(MatterWrap);

  useEffect(() => {
    const { Engine, Events, Runner, Render, World, Body, Common, Bodies } = Matter;

    const dimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };

    const engine = Engine.create();
    engine.world.gravity.y = 0;
    engine.world.gravity.x = 0;
    engine.world.gravity.scale = 0;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: dimensions.width,
        height: dimensions.height,
        wireframes: false,
        background: '#121212',
      },
    });

    const world = engine.world;

    // Central attractor
    const attractiveBody = Bodies.circle(dimensions.width / 2, dimensions.height / 2, 20, {
      isStatic: true,
      render: {
        fillStyle: '#000',
        strokeStyle: '#000',
        lineWidth: 0,
      },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1.2e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1.2e-6,
          }),
        ],
      },
    });

    World.add(world, attractiveBody);

    // ✅ Reduced stress on CPU slightly (same visuals, same loop)
    const maxParticles = 25;

    for (let i = 0; i < maxParticles; i++) {
      const x = Common.random(0, dimensions.width);
      const y = Common.random(0, dimensions.height);
      const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);

      const baseWrap = {
        min: { x: 0, y: 0 },
        max: { x: dimensions.width, y: dimensions.height },
      };

      const body = Bodies.polygon(x, y, polygonNumber, s, {
        mass: s / 20,
        friction: 0,
        frictionAir: 0.06,
        angle: Math.random() * 360,
        render: {
          fillStyle: '#222222',
          strokeStyle: '#000000',
          lineWidth: 2,
        },
        plugin: { wrap: baseWrap },
      });

      Body.setVelocity(body, {
        x: Common.random(-0.3, 0.3),
        y: Common.random(-0.3, 0.3),
      });

      World.add(world, body);

      const r = Common.random(0, 1);

      const circleSmall = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.05,
        render: {
          fillStyle: r > 0.3 ? '#27292d' : '#444444',
          strokeStyle: '#000000',
          lineWidth: 2,
        },
        plugin: { wrap: baseWrap },
      });

      Body.setVelocity(circleSmall, {
        x: Common.random(-0.3, 0.3),
        y: Common.random(-0.3, 0.3),
      });

      World.add(world, circleSmall);

      const circleMedium = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0.07,
        render: {
          fillStyle: r > 0.3 ? '#334443' : '#222222',
          strokeStyle: '#111111',
          lineWidth: 4,
        },
        plugin: { wrap: baseWrap },
      });

      Body.setVelocity(circleMedium, {
        x: Common.random(-0.3, 0.3),
        y: Common.random(-0.3, 0.3),
      });

      World.add(world, circleMedium);

      const circleBig = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.09,
        render: {
          fillStyle: '#191919',
          strokeStyle: '#111111',
          lineWidth: 3,
        },
        plugin: { wrap: baseWrap },
      });

      Body.setVelocity(circleBig, {
        x: Common.random(-0.2, 0.2),
        y: Common.random(-0.2, 0.2),
      });

      World.add(world, circleBig);
    }

    // Mouse tracking (optimized)
    let mouseX = dimensions.width / 2;
    let mouseY = dimensions.height / 2;
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          ticking = false;
        });
      }
    };

    const handleMouseLeave = () => {
      mouseX = dimensions.width / 2;
      mouseY = dimensions.height / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    Events.on(engine, 'afterUpdate', () => {
      Body.setPosition(attractiveBody, {
        x: attractiveBody.position.x + (mouseX - attractiveBody.position.x) * 0.035,
        y: attractiveBody.position.y + (mouseY - attractiveBody.position.y) * 0.035,
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Resize optimization
    let resizeTimeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        render.canvas.width = window.innerWidth;
        render.canvas.height = window.innerHeight;
        render.options.width = window.innerWidth;
        render.options.height = window.innerHeight;
      }, 150);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup (safe & production ready)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', handleResize);

      clearTimeout(resizeTimeout);

      Render.stop(render);
      Runner.stop(runner);
      World.clear(world);
      Engine.clear(engine);

      render.canvas.remove();
      render.textures = {};
    };
  }, []);

  return <div ref={sceneRef} className='absolute inset-0 h-full w-full max-w-7xl' />;
};

export default MatterScene;
