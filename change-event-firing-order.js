function primaryTriggeredDebounce(e) {
  // This function is to make sure that when a "tap" triggers multiple events
  // the "touchstart" event is always the first one we react to
  if (e.type === 'touchstart') {
    primaryTriggered(e);
  } else {
    setTimeout(() => primaryTriggered(e));
  }
}