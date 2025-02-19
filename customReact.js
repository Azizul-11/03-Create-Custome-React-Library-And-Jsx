function customRender(reactElement, container) {
//   const domElement = document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.children

//   domElement.setAttribute("href", reactElement.props.href);

//   domElement.setAttribute("target", reactElement.props.target);

//   container.appendChild(domElement);


   const domElemet= document.createElement(reactElement.type);

   domElemet.innerHTML = reactElement.children;
   for (const prop in reactElement.props) {
    if(prop === "children")continue;

    domElemet.setAttribute(prop,reactElement.props[prop])
   }
   container.appendChild(domElemet);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelector("#root");

customRender(reactElement, mainContainer);