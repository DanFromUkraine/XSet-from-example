
class XSet extends Set {
    union(...sets) {
        return XSet.union(this, ...sets)
    }
    intersection(...sets) {
        return XSet.intersection(this, ...sets)
    }
    difference(...sets) {
        return XSet.difference(this, ...sets)
    }
    symmetricDifference(set) {
        return XSet.symmetricDifference(this, set)
    }
    cartesianProduct(set) {
        return XSet.cartesianProduct(this, set)
    }
    powerSet() {
        return XSet.powerSet()
    }

    static union(a, ...bSets) {
        const unionSet = new XSet(a);
        for (const b of bSets) {
            for (const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet
    }
    static intersection(a, ...bSets) {
        const intersectionSet = new XSet(a);
        for (const aValue of intersectionSet) {
            for (const b of bSets) {
                if (!b.has(aValue)) {
                    intersectionSet.delete(aValue);
                }
            }
        }
        return intersectionSet;
    }
    static difference(a, b) {
        const differenceSet = new XSet(a);
        for (const bValue of b) {
            if (a.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return intersectionSet;
    }

    static symmetricDifference(a, b) {
        return a.union(b).difference(a.intersection(b));
    }
    static cartesianProduct(a, b) {
        const cartesianProductSet = new XSet();
        for (const aValue of a) {
            for (const bValue of b) {
                cartesianProductSet.add([aValue, bValue]);
            }
        }
        return cartesianProductSet;
    }
static powerSet(a) {
    const powerSet = new XSet().add(new XSet);
    for (const aValue of a) {
        for (const set of new XSet(powerSet)) {
            powerSet.add(new XSet(set).add(aValue));
        }
    }
    return powerSet;
    
}
    
}