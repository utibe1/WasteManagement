import React from 'react';
import './myComponent.css'; // Import your CSS file where you define keyframes and custom styles.

const MyComponent = () => {
  return (
    <div id="app" className="grid grid-cols-1 md:grid-cols-2 items-center p-12 h-90vh bg-ede8e2 text-3a3535">
      <div className="title text-8vw font-prata">
        <div className="title-inner inline-block animate-inner-left">
          <div className="cafe inline-block animate-outer-left">
            <div className="cafe-inner inline-block animate-inner-left animate-text-clip">Keyframé</div>
          </div>
          <div className="mozart inline-block animate-text-clip">Artistes</div>
        </div>
      </div>

      <div className="image grid-row-1 grid-col-2 ml-n8 opacity-70 animate-image-in">
        <img
          src="https://images.unsplash.com/photo-1616362355051-6a9f8c434fff?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzE0MTYzNQ&ixlib=rb-1.2.1&q=80&w=800&h=600"
          alt=""
          className="block w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MyComponent;