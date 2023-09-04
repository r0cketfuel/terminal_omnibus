import React, { useState, useRef, useEffect } from 'react';

// Multi select que muestra los elementos seleccinados en la perte de el Buscador

const MultiSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (optionValue) => {
    const isSelected = value.includes(optionValue);
    if (isSelected) {
      onChange(value.filter((val) => val !== optionValue));
    } else {
      onChange([...value, optionValue]);
    }
  };

  const handleRemoveSelected = (removedValue) => {
    onChange(value.filter((val) => val !== removedValue));
  };

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOutsideClick = (e) => {
    if (containerRef.current && !containerRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="multi-select" ref={containerRef}>
      <div className="selected-items" onClick={toggleOpen}>
        <div className="selected-items-container">
          {value.map((itemValue) => (
            <div key={itemValue} className="selected-item">
              {itemValue}
              <span
                className="remove-selected"
                onClick={() => handleRemoveSelected(itemValue)}
              >
                x
              </span>
            </div>
          ))}
        </div>
        <input
          type="text"
          className="search-input"
          placeholder={placeholder || "Search..."}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="dropdown-icon">{isOpen ? '^' : 'v'}</div>
      </div>
      {isOpen && (
        <div className="options-list">
          {filteredOptions.map((option) => (
            <div
              key={option.value}
              className={`option ${value.includes(option.value) ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      <style>
        {`
          .multi-select {
            position: relative;
          }

          .selected-items {
            display: flex;
            align-items: center;
            background-color: #FFFFFF; /* Fondo oscuro para el componente */
            padding: 6px;
            border-radius: 4px;
            cursor: pointer;
          }

          .selected-items-container {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }

          .selected-item {
            background-color: #3182CE; /* Color de fondo de elementos seleccionados */
            color: white;
            padding: 4px 8px;
            border-radius: 20px;
            font-size: 12px;
            display: flex;
            align-items: center;
          }

          .remove-selected {
            margin-left: 4px;
            cursor: pointer;
          }

          .search-input {
            flex: 1;
            margin-left: 8px;
            border: none;
            background-color: transparent;
          }

          .dropdown-icon {
            margin-left: 8px;
          }

          .options-list {
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            z-index: 1;
            max-height: 200px;
            overflow-y: auto;
          }

          .option {
            padding: 8px;
            cursor: pointer;
          }

          .option.selected {
            background-color: #3182CE; /* Color de fondo de opciones seleccionadas */
            color: white;
          }
        `}
      </style>
    </div>
  );
};

const ComponentMulti = () => {
  const [value, setValue] = useState([]);

  const options = [
    { label: 'Sol aeropuerto camisa verde', value: 'Sol' },
    { label: 'Arena aeropuerto camisa Azul', value: 'Arena' },
    { label: 'Playa aeropuerto camisa Rojo', value: 'Playa' },
    { label: 'Mar aeropuerto camisa Rosa', value: 'Mar ' },
  ];

  return (
    <MultiSelect
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Busca y selecciona"
    />
  );
};

export default ComponentMulti;
