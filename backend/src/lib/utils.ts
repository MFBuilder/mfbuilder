const groupBy = <K, V>(
  entries: readonly V[],
  groupFn: (value: V) => K
): Map<K, V[]> => {
  const result = new Map<K, V[]>();

  for (const value of entries) {
    const key = groupFn(value);

    if (!result.has(key)) {
      result.set(key, []);
    }

    result.get(key)?.push(value);
  }

  return result;
};
