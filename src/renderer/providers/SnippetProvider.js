import React, { createContext, useState, useEffect } from 'react';

import { firestore } from '../firebase';
import { collectIdsAndData } from '../../utils';

export const SnippetContext = createContext();

const UserProvider = ({ children }) => {
  const [snippets, setSnippets] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const unsubscribeFromSnippets = firestore
      .collection('snippets')
      .onSnapshot(snapshot => {
        setSnippets(snapshot.docs.map(collectIdsAndData));
      });

    return () => {
      unsubscribeFromSnippets && unsubscribeFromSnippets();
    };
  }, []);

  const updateFilter = newSearchTerm => {
    setSearchTerm(newSearchTerm);
  };

  const applyFilterAndSort = (snippets, searchTerm) => {
    let filteredSnippets = snippets;

    // Filter
    if (searchTerm !== '') {
      if (searchTerm.includes(' ')) {
        filteredSnippets = snippets.filter(snippet =>
          searchTerm
            .split(' ')
            .every(searchWord =>
              snippet.body.toLowerCase().includes(searchWord.toLowerCase())
            )
        );
      } else {
        filteredSnippets = snippets.filter(snippet =>
          snippet.body.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    }

    return filteredSnippets;
  };

  const filteredSnippets = snippets && applyFilterAndSort(snippets, searchTerm);

  return (
    <SnippetContext.Provider
      value={{
        snippets: filteredSnippets,
        updateFilter
      }}
    >
      {children}
    </SnippetContext.Provider>
  );
};

export default UserProvider;
