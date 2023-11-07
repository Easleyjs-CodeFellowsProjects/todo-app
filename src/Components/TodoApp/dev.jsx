







// non-axios verison
useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
    // linter will want 'incomplete' added to dependency array unnecessarily. 
    // disable code used to avoid linter warning 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    let pagedItemArr = [];
    const { displayCount } = settings;

    if ( activePage > 1) {
      //console.log('page greater than 1:', activePage)
      const startIdx = ( activePage -1 ) * displayCount;
      const endIdx = startIdx + displayCount;

      if ( endIdx < list.length -1 ) {
        pagedItemArr = list.slice( startIdx, endIdx );
      } else {
        pagedItemArr = list.slice( startIdx )
      }
      setDisplayList( pagedItemArr );
    }
    if ( activePage === 1 ) {
      let pagedItemArr = list.slice(0, displayCount);
      setDisplayList( pagedItemArr );
    }
  }, [list, activePage]);