import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      label: 'Heading',
      content:
        '<h2 id="heading" class="heading-class" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 24px; color: red; text-align: left; line-height: 1.5;">Heading Text</h2>',
    },
    {
      id: 2,
      label: 'Text Content',
      content:
        '<p id="text" class="text-class" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; background-color: lightblue; padding: 10px;">More text content</p>',
    },
    {
      id: 3,
      label: 'Image',
      content:
        '<img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />',
    },
    {
      id: 4,
      label: 'Two Column Layout',
      content: `
        <div class="two-column-layout" id="two-column-layout-1">
          <div class="column" id="column-left-1">
            <img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />
            <p>Text in the left column</p>
          </div>
          <div class="column" id="column-right-1">
            <img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />
            <p>Text in the right column</p>
          </div>
        </div>
      `,
    },
    {
      id: 5,
      label: 'Three Column Layout',
      content: `
        <div class="three-column-layout">
          <div class="column">
            <img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />
            <p>First Column Content</p>
          </div>
          <div class="column">
            <img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />
            <p>Second Column Content</p>
          </div>
          <div class="column">
            <img id="image" class="image-class" src="https://via.placeholder.com/150" alt="Yet Another Image" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black; border-radius: 50%;" />
            <p>Third Column Content</p>
          </div>
        </div>
      `,
    },
    {
      id: 6,
      label: 'Hyperlink',
      content:
        '<a href="https://example.com" style="font-family: Arial, sans-serif; font-weight: normal; font-size: 24px; color: blue; text-align: left; line-height: 1.5;">Link Text</a>',
    },
    {
      id: 7,
      label: 'Banner Image',
      content:
        '<img src="https://via.placeholder.com/720x80" alt="Banner Image" style=" display: block; margin-left: auto; margin-right: auto; max-width: 100%;font-family: Arial, sans-serif; font-weight: normal; font-size: 16px; color: black; text-align: left; line-height: 1.5; border: 1px solid black;" />',
    },
    {
      id: 8,
      label: 'Social Media Icons',
      content: `
        <div class="social-media-icons">
          <a href="https://www.facebook.com" style="font-size: 16px">
          <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style="width: 20px; height: 20px;"  viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
        </svg>
        
          </a>
          <a href="https://www.twitter.com">
          <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              style="width: 20px; height: 20px;" 
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style="width: 20px; height: 20px;" 
            viewBox="0 0 24 24" >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>

          <a href="">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            style="width: 20px; height: 20px;" 
            viewBox="0 0 24 24"  >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      `,
    },
  ]);

  const [leftSideItems, setLeftSideItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedContent, setEditedContent] = useState('');
  const [leftItemIdCounter, setLeftItemIdCounter] = useState(1);
  const [editableAttributes, setEditableAttributes] = useState([]);
  const [editableStyles, setEditableStyles] = useState([]);

  // State variables for Edit Style
  const [styles, setStyles] = useState({
    headingType: 'h2',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'normal',
    fontSize: '24px',
    color: 'red',
    textAlign: 'left',
    lineHeight: '1.5',
  });

  useEffect(() => {
    if (selectedItem) {
      // Extract editable attributes from the selected item's content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = selectedItem.content;
      const attributes = [];
      if (tempDiv.firstChild) {
        const element = tempDiv.firstChild;
        if (element.attributes) {
          for (let attr of element.attributes) {
            attributes.push({ name: attr.name, value: attr.value });
          }
        }
      }
      setEditableAttributes(attributes);
    }
  }, [selectedItem]);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDropLeft = (e) => {
    const itemId = e.dataTransfer.getData('text/plain');
    const item = items.find((item) => item.id === Number(itemId));
    const newItem = {
      id: leftItemIdCounter,
      label: item.label,
      content: item.content,
    };
    setLeftItemIdCounter(leftItemIdCounter + 1);
    setLeftSideItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDropIntoColumn = (e, columnId) => {
    const itemId = e.dataTransfer.getData('text/plain');
    const item = items.find((item) => item.id === Number(itemId));
    const columnIndex = leftSideItems.findIndex((item) => item.id === columnId);
    if (columnIndex !== -1) {
      const updatedLeftSideItems = [...leftSideItems];
      updatedLeftSideItems[columnIndex].content += item.content;
      setLeftSideItems(updatedLeftSideItems);
    }
  };

  const handleItemClick = (itemId) => {
    const item = leftSideItems.find((item) => item.id === itemId);
    setSelectedItem(item);
    setEditedContent(item.content);
  };

  const handleContentChange = (e) => {
    setEditedContent(e.target.value);
  };

  const handleSave = () => {
    // Construct the updated content with the edited style properties
    let updatedContent = editedContent;

    if (selectedItem) {
      // Parse the existing content to manipulate its style
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = editedContent;

      // Ensure there's a first child element
      if (tempDiv.firstChild) {
        const element = tempDiv.firstChild;

        // Check if the element has style properties
        if (element.style) {
          // Update style properties based on user input
          Object.keys(styles).forEach((style) => {
            element.style[style] = styles[style];
          });

          // Update the edited content with the modified style
          updatedContent = tempDiv.innerHTML;
        } else {
          console.error('Element does not have style properties.');
        }
      } else {
        console.error('No child element found.');
      }
    }

    // Save the updated content to the left side items
    setLeftSideItems((prevItems) =>
      prevItems.map((item) =>
        item.id === selectedItem.id
          ? { ...item, content: updatedContent }
          : item
      )
    );

    // Clear selected item and edited content
    setSelectedItem(null);
    setEditedContent('');
  };

  const handleDelete = (itemId) => {
    if (selectedItem && selectedItem.id === itemId) {
      setSelectedItem(null);
      setEditedContent('');
    }
    setLeftSideItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleAttributeChange = (e, index) => {
    const newAttributes = [...editableAttributes];
    newAttributes[index].value = e.target.value;
    setEditableAttributes(newAttributes);

    // Update editedContent with the changes in attributes
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = editedContent;
    if (tempDiv.firstChild) {
      const element = tempDiv.firstChild;
      element.setAttribute(newAttributes[index].name, e.target.value);
      setEditedContent(tempDiv.innerHTML);
    }
  };

  const handleStyleChange = (e, index) => {
    const newStyles = { ...styles };
    const styleName = Object.keys(newStyles)[index];
    newStyles[styleName] = e.target.value;
    setStyles(newStyles);
  };

  const handleSaveAsHTML = () => {
    // Construct the HTML content with styles
    const stylesString = Object.entries(styles)
      .map(([style, value]) => `${style}: ${value};`)
      .join(' ');

    const stylesHtml = `<style>
      .App {
        text-align: center;
        margin-top: 50px;
      }

      .drop-container {
        display: flex;
      }

      .drop-space {
        border: 1px solid black;
        min-height: 500px;
        width: 80%;
      }

      .component-list {
        margin-top: 20px;
      }

      .draggable-item {
        margin: 10px;
        cursor: move;
      }

      .dropped-item {
        position: relative;
      }

      .two-column-layout {
        display: flex;
      }

      .two-column-layout .column {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 0 5px;
      }

      .three-column-layout {
        display: flex;
      }

      .three-column-layout .column {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 0 5px;
      }
      </style>`;

    let leftDropSpaceHTML = `<html><head><title>Left Drop Space Preview</title>${stylesHtml}</head><body>   <div className="drop-container">
    <div id="left-drop-space"
      className="drop-space">`;

    // Include the content without top-right-icons div
    leftSideItems.forEach((item) => {
      const contentWithoutIcons = item.content.replace(
        '<div className="top-right-icons">...</div>',
        ''
      );
      leftDropSpaceHTML += contentWithoutIcons;
    });

    leftDropSpaceHTML += '</div></div></body></html>';

    // Save the HTML content to a file or any other preferred method
    // For demonstration, we can simply log it to the console
    console.log(leftDropSpaceHTML);
  };

  const handleShowPreview = () => {
    // Open a new window/tab and display the HTML preview
    const previewWindow = window.open('', '_blank');
    const stylesHtml = `<style>
      .App {
        text-align: center;
        margin-top: 50px;
      }

      .drop-container {
        display: flex;
      }

      .drop-space {
        border: 1px solid black;
        min-height: 500px;
        width: 100%;
      }

      .component-list {
        margin-top: 20px;
      }

      .draggable-item {
        margin: 10px;
        cursor: move;
      }

      .dropped-item {
        position: relative;
      }

      .two-column-layout {
        display: flex;
      }

      .two-column-layout .column {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 0 5px;
      }

      .three-column-layout {
        display: flex;
      }

      .three-column-layout .column {
        flex: 1;
        padding: 10px;
        border: 1px solid #ccc;
        margin: 0 5px;
      }
    </style>`;

    previewWindow.document
      .write(`<html><head><title>Left Drop Space Preview</title>${stylesHtml}</head><body><div className="App">
    <div className="drop-container">
      <div id="left-drop-space"
        className="drop-space">`);

    leftSideItems.forEach((item) => {
      const contentWithoutIcons = item.content.replace(
        '<div className="top-right-icons">...</div>',
        ''
      );
      previewWindow.document.write(contentWithoutIcons);
    });

    previewWindow.document.write('</div></div></body></html>');
    previewWindow.document.close();
  };

  return (
    <div className="App">
      <h1>Drag and Drop HTML Components</h1>
      <div className="drop-container">
        <div
          id="left-drop-space"
          onDrop={handleDropLeft}
          onDragOver={handleDragOver}
          className="drop-space"
        >
          <h2>Left Drop Space</h2>
          {leftSideItems.map((item) => (
            <div key={item.id} className="dropped-item">
              <div className="top-right-icons">
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleItemClick(item.id)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(item.id)}
                />
              </div>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          ))}
        </div>
        <div className="component-list">
          <h2>Component List</h2>
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, item.id)}
              className="draggable-item"
            >
              <div className="item-label">{item.label}</div>
            </div>
          ))}

          {selectedItem && (
            <div className="editor">
              <h2>Edit Content</h2>
              <textarea
                value={editedContent}
                onChange={handleContentChange}
                rows="20"
                cols="50"
              />
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h3>Edit Attributes:</h3>
                    </td>
                    <td></td>
                  </tr>
                  {editableAttributes.map((attr, index) => (
                    <tr key={index}>
                      <td>
                        <strong>{attr.name}:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={attr.value}
                          onChange={(e) => handleAttributeChange(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td>
                      <h3>Edit Style:</h3>
                    </td>
                    <td></td>
                  </tr>
                  {Object.entries(styles).map(([style, value], index) => (
                    <tr key={index}>
                      <td>
                        <strong>{style}:</strong>
                      </td>
                      <td>
                        <input
                          type="text"
                          value={value}
                          onChange={(e) => handleStyleChange(e, index)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button onClick={handleSave}>Save</button>
            </div>
          )}
        </div>
      </div>
      <div className="buttons">
        <button onClick={handleSaveAsHTML}>Save as HTML</button>
        <button onClick={handleShowPreview}>Show Preview</button>
      </div>
    </div>
  );
}

export default App;
