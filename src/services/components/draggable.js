const makeDraggable = element => {
    // create reactive object
    const position = reactive({x: 0, y: 0, /*etc...*/ });

    // compute style
    const style = computed(() => {
      // To Be Implemented (TBI)
      return {};
    });

    // create  mouse interaction functions
    const onMouseDown = e => {/* TBI */};
    const onMouseMove = e => {/* TBI */};
    const onMouseUp = e => {/* TBI */};

    // assign mousedown listener
    element.addEventListener("mousedown", onMouseDown);

    // return objects
    return { position, style };
}

export default makeDraggable