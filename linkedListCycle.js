var hasCycle = function (head) {
  const nodesSeen = {};
  while (head !== null) {
    if (nodesSeen[head]) {
      return true;
    } else {
      nodesSeen[head] = true;
    }
    head = head.next;
  }
  return false;
};