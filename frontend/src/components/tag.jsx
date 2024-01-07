import { useState } from 'react';
import { TechnologyTags } from './techstack';
import './style.css';
import { WithContext as ReactTags } from 'react-tag-input';

const suggestions = TechnologyTags.map((tag) => {
  return {
    id: tag,
    text: tag,
  };
});

const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default () => {
  const [tags, setTags] = useState([
    { id: 'Python', text: 'Python' },
    { id: 'Java', text: 'Java' },
    { id: 'C++', text: 'C++' },
    { id: 'JavaScript', text: 'JavaScript' },
  ]);

  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    setTags(newTags);
  };

  const handleTagClick = (index) => {
    console.log('The tag at index ' + index + ' was clicked');
  };

  return (
    <div className="app">
      <h1> TechStack used </h1>
      <div>
        <ReactTags
          tags={tags}
          suggestions={suggestions}
          delimiters={delimiters}
          handleDelete={handleDelete}
          handleAddition={handleAddition}
          handleDrag={handleDrag}
          handleTagClick={handleTagClick}
          inputFieldPosition="bottom"
          autocomplete
          editable
          autofocus={false}
        />
      </div>
    </div>
  );
};