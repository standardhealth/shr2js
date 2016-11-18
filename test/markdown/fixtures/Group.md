| shr.test.Group [Entry] ||
|---|---|
| Concept | http://foo.org bar |
| Concept | http://boo.org far |
| Description | It is a group of elements |
| Type | group |
| Element | shr.test.Simple |
| Element | optional shr.test.Coded |
| Element | 0 to 2 Choice of: <ul><li>shr.other.test.Simple</li><li>1 or more shr.test.ForeignElementValue</li></ul> |
| Element | 0 or more shr.test.ElementValue |

<!-- next file -->

| shr.test.Simple [Entry] ||
|---|---|
| Concept | http://foo.org bar |
| Description | It is a simple element |
| Type | string |

<!-- next file -->

| shr.test.Coded [Entry] ||
|---|---|
| Description | It is a coded element |
| Type | code from http://standardhealthrecord.org/test/vs/Coded |


<!-- next file -->

| shr.test.ForeignElementValue [Entry] ||
|---|---|
| Description | It is an element with a foreign element value |
| Type | shr.other.test.Simple |

<!-- next file -->

| shr.test.ElementValue [Entry] ||
|---|---|
| Description | It is an element with an element value |
| Type | shr.test.Simple |

<!-- next file -->

| shr.other.test.Simple [Entry] ||
|---|---|
| Concept | http://foo.org bar |
| Description | It is a simple element |
| Type | string |