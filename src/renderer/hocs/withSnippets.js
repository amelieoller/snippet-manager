import React from 'react';
import { SnippetContext } from '../providers/SnippetProvider';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withSnippets = Component => {
  const WrappedComponent = props => {
    return (
      <SnippetContext.Consumer>
        {({ snippets, updateFilter }) => (
          <Component snippets={snippets} updateFilter={updateFilter} {...props} />
        )}
      </SnippetContext.Consumer>
    );
  };

  WrappedComponent.displayName = `WithSnippets(${getDisplayName(WrappedComponent)})`;

  return WrappedComponent;
};

export default withSnippets;
