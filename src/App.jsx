import { useState, useEffect } from 'react';
import { Box, chakra, Button, useColorMode, useColorModeValue,  } from '@chakra-ui/react';
import { CloseIcon, SunIcon }from '@chakra-ui/icons';



function App() {
  const [currentDate, setCurrentDate] = useState({
    dayOfWeek: '',
    monthName: '',
    dayNumber: '',
    year: ''
  });

  useEffect(() => {
    // Obtener la fecha actual
    const today = new Date();

    // Arreglos de nombres de días y meses
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Extraer valores
    const dayOfWeek = days[today.getDay()];
    const monthName = months[today.getMonth()];
    const dayNumber = today.getDate();
    const year = today.getFullYear();

    // Establecer la fecha en el estado
    setCurrentDate({
      dayOfWeek,
      monthName,
      dayNumber,
      year
    });
  }, []);

  const [savedSelections, setSavedSelections] = useState([]);
  const [showSavedHabits, setShowSavedHabits] = useState(false);
  
  const handleClick = (category, itemId) => {
    setSelectedItems(prevSelected => ({
      ...prevSelected,
      [category]: prevSelected[category] === itemId ? null : itemId
    }));
  };

  const groupByDate = (selections) => {
    return selections.reduce((acc, selection) => {
      if (!acc[selection.date]) {
        acc[selection.date] = [];
      }
      acc[selection.date].push(selection.habit);
      return acc;
    }, {});
  };
  
  const [selectedItems, setSelectedItems] = useState({
    habit: null
  });

  const handleSaveSelection = () => {
    if (selectedItems.habit) {

      const newSelection = {
        habit: selectedItems.habit,
        date: `${currentDate.dayOfWeek}, ${currentDate.monthName} ${currentDate.dayNumber}, ${currentDate.year}`
      };

      setSavedSelections([...savedSelections, newSelection]);
      setSelectedItems({ habit: null });
      setShowSavedHabits(true);
    } else {
      alert('Please select a habit and date before saving.');
    }
  };

  const removeSelection = (index) => {
    const newSelections = [...savedSelections];
    newSelections.splice(index, 1);
    setSavedSelections(newSelections);
    if (newSelections.length === 0) {
      setShowSavedHabits(false);
    }
  };

  

  const { colorMode, toggleColorMode } = useColorMode('');
  const bg = useColorModeValue('', '');
  const color = useColorModeValue('black', 'White');
  
  const hover = useColorModeValue('blue', '#48BB78');
  const [showAll, setShowAll] = useState(false);
  const habits = [
    'Walk 15 min', 'Read 15 min', 'Excercise 15 min',
    'Walk 30 min', 'Read 30 min', 'Excercise 30 min',
    'Walk 45 min', 'Read 45 min', 'Excercise 45 min'
  ];

  

  return (
    <>
    
    <Box style={{ padding: '20px', }} bg={bg} color={color} >
      <h1>Habit tracker</h1>
      
      <header>
      <Button onClick={toggleColorMode} margin={2}> 
        <SunIcon />
         {colorMode === 'Light' ? 'Dark' : ''}
      </Button>
      </header>
      <Box p={5} textAlign="center">
        <p>{currentDate.dayOfWeek}, {currentDate.monthName} {currentDate.dayNumber}, {currentDate.year}</p>
      </Box>
      
      
      <Box>
      <h2>Habit</h2>
      <ul>
        {(showAll ? habits : habits.slice(0, 2)).map((habit) => (
          <li
            key={habit}
            onClick={() => handleClick('habit', habit)}
            style={{ backgroundColor: selectedItems.habit === habit ? hover : '', cursor: 'pointer', margin: '5px', padding: '10px', borderRadius: '8px' }}
          >
            {habit}
          </li>
        ))}
      </ul>
      </Box>
      <Box display="flex" justifyContent="flex-end">

      {!showAll && (
        <Button _hover={{ bg: hover }} onClick={() => setShowAll(true)} mt={4}>
          ...
        </Button>
      )}
      {showAll && (
        <Button _hover={{ bg: hover }} onClick={() => setShowAll(false)} mt={4}>
          Show less
        </Button>
      )}
      </Box>
        
      <Button _hover={{ bg: hover }}>
        <chakra.button onClick={handleSaveSelection}
          px='3' py='2'rounded='md' cursor='pointer' >
            Save and continue
        </chakra.button>
      </Button>
      
      {showSavedHabits && (
      <Box className='select'>
        <h2>Saved Habits</h2>
        <ul>
      {Object.entries(groupByDate(savedSelections)).map(([date, habits], index) => (
        <Box key={index} mb={4}>
          <Box>{date}</Box>
            <ul>
            {habits.map((habit, habitIndex) => (
              <li key={habitIndex} style={{ backgroundColor: hover, margin: '5px', padding: '10px', borderRadius: '8px' }}>
                {habit}
                <chakra.button onClick={() => removeSelection(index)}
                  px='3'
                  py='2'
                  bg=''
                  _hover={{ bg: '#63171B' }}
                  rounded='md'>
                  <CloseIcon />
                </chakra.button>
              </li>
            ))}
            </ul>
        </Box>
      ))}
    </ul>
        
      </Box>
    )}


    
      
    </Box>
    </>
  );
}

export default App;
