# Test

### <a name="Coded"></a>Coded [Entry]
It is a coded element

|  |  |  |
| --- | --- | --- |
| Value:&nbsp;`code` from http://standardhealthrecord.org/test/vs/Coded |  |  |

### <a name="ElementValue"></a>ElementValue [Entry]
It is an element with an element value

|  |  |  |
| --- | --- | --- |
| Value:&nbsp;[`Simple`](#Simple) |  | It is a simple element |

### <a name="ForeignElementValue"></a>ForeignElementValue [Entry]
It is an element with a foreign element value

|  |  |  |
| --- | --- | --- |
| Value:&nbsp;[`Simple`](../other/test/index.md#Simple) |  | It is a simple element |

### <a name="Group"></a>Group [Entry]
It is a group of elements [bar](http://foo.org/bar) _(Foobar)_, [far](http://boo.org/far) _(Boofar)_

|  |  |  |
| --- | --- | --- |
| [`Simple`](#Simple) | 1 | It is a simple element |
| [`Coded`](#Coded) | optional | It is a coded element |
| Choice | 0&nbsp;to&nbsp;2 |  |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;[`Simple`](../other/test/index.md#Simple) | 1 | It is a simple element |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\|&nbsp;[`ForeignElementValue`](#ForeignElementValue) | 1&nbsp;or&nbsp;more | It is an element with a foreign element value |
| [`ElementValue`](#ElementValue) | 0&nbsp;or&nbsp;more | It is an element with an element value |

### <a name="GroupDerivative"></a>GroupDerivative [Entry]
It is a derivative of a group of elements

|  |  |  |
| --- | --- | --- |
| Based&nbsp;On:&nbsp;[`Group`](#Group) |  | It is a group of elements |
| Value:&nbsp;`string` |  |  |

### <a name="Simple"></a>Simple [Entry]
It is a simple element [bar](http://foo.org/bar) _(Foobar)_

|  |  |  |
| --- | --- | --- |
| Value:&nbsp;`string` |  |  |

# Other:Test

### <a name="Simple"></a>Simple [Entry]
It is a simple element [bar](http://foo.org/bar) _(Foobar)_

|  |  |  |
| --- | --- | --- |
| Value:&nbsp;`string` |  |  |