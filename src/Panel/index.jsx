import React, { Component, PropTypes } from 'react';
import Radium from 'radium';
import * as styles from './styles';

export default Radium(class Panel extends Component {

  static propTypes = {
    logEnabled: PropTypes.bool.isRequired,
    updatesEnabled: PropTypes.bool.isRequired,
    graphEnabled: PropTypes.bool.isRequired,
    onToggleLog: PropTypes.func.isRequired,
    onToggleUpdates: PropTypes.func.isRequired,
    onToggleGraph: PropTypes.func.isRequired,
  };

  render() {
    const {
      position,
      logEnabled,
      updatesEnabled,
      graphEnabled,
      onToggleLog,
      onToggleUpdates,
      onToggleGraph,
    } = this.props;

    if (position) {
      styles.top = position.top;
      styles.right = position.right;
      styles.bottom = position.bottom;
      styles.left = position.left;
    } else {
      styles.top = '0px';
      styles.right = '20px';
    }

    return (
      <div>
        <div style={Object.assign(styles.panel, styles)}>
          <button
            title="Visualize component re-renders"
            style={[styles.button, updatesEnabled ? styles.buttonUpdatesActive : styles.buttonUpdates, updatesEnabled && styles.button.active]}
            key="buttonUpdates"
            onClick={onToggleUpdates}
          />
          <button
            title="Select a component and show it's dependency tree"
            style={[styles.button, graphEnabled ? styles.buttonGraphActive : styles.buttonGraph, graphEnabled && styles.button.active]}
            key="buttonGraph"
            onClick={onToggleGraph}
          />
          <button
            title="Log all MobX state changes and reactions to the browser console (use F12 to show / hide the console). Use Chrome / Chromium for an optimal experience"
            style={[styles.button, logEnabled ? styles.buttonLogActive : styles.buttonLog, logEnabled && styles.button.active]}
            key="buttonLog"
            onClick={onToggleLog}
          />
        </div>
      </div>
    );
  }
});
