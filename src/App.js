import "./App.css";
import { useState } from "react";
function App() {
  const bookList = ["Hobbies", "list2", "list3", "list4"];

  const [bookName, setBookName] = useState(bookList);
  const [editIndex, setEditIndex] = useState(-1);
  const [editValue, setEditValue] = useState("");
  const [slectedList, setSelectedList] = useState(
    new Array(bookList.length).fill(0)
  );
  const handleCatch = (value) => {
    let res = slectedList.map((el, i) =>
      value === i ? (el === 0 ? 1 : 0) : el
    );
    setSelectedList(res);
  };
  const handleDel = (id) => {
    const res = bookName.filter((el, i) => i !== id);
    setBookName(res);
  };
  const handleEdit = (i, value) => {
    setEditIndex(i);
    setEditValue(value);
  };
  const handleSave = (index) => {
    let res = bookName.map((el, i) => (i == index ? editValue : el));

    setBookName(res);
    setEditIndex(-1);
  };
  console.log("slectedList:", slectedList);
  return (
    <div className="App">
      {bookName.map((el, i) => {
        return (
          <>
            <div>
              <input
                value={slectedList[i]}
                onChange={() => handleCatch(i)}
                type="checkbox"
              />
              {el}
              {editIndex == i ? (
                <>
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                  <button onClick={() => handleSave(i)}>Save</button>{" "}
                </>
              ) : (
                <></>
              )}
              {slectedList[i] === 1 && (
                <div>
                  <button onClick={() => handleDel(i)}>Del</button>{" "}
                  <button onClick={() => handleEdit(i, el)}>Edit</button>
                </div>
              )}
            </div>
          </>
        );
      })}
    </div>
  );
}

export default App;
