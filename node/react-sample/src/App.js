import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";



function App() {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div>
              <Draggable>
                {(provided) => (
                  <div>
                    item0
                  </div>
                )}
              </Draggable>
            </div>)}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
