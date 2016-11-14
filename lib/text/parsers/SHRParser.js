// Generated from SHRParser.g4 by ANTLR 4.5
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SHRParserListener = require('./SHRParserListener').SHRParserListener;
var SHRParserVisitor = require('./SHRParserVisitor').SHRParserVisitor;

var grammarFileName = "SHRParser.g4";

var serializedATN = ["\3\u0430\ud6d1\u8206\uad2d\u4417\uaef1\u8d80\uaadd",
    "\3\64\u013b\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b",
    "\4\t\t\t\4\n\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20",
    "\t\20\4\21\t\21\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4",
    "\27\t\27\4\30\t\30\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35",
    "\4\36\t\36\4\37\t\37\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'",
    "\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4,\t,\4-\t-\4.\t.\4/\t/\3\2\3\2\5\2a\n",
    "\2\3\3\3\3\7\3e\n\3\f\3\16\3h\13\3\3\3\3\3\3\4\3\4\3\4\3\5\6\5p\n\5",
    "\r\5\16\5q\3\6\3\6\3\6\3\7\6\7x\n\7\r\7\16\7y\3\b\3\b\3\b\5\b\177\n",
    "\b\3\t\3\t\3\t\3\t\3\t\3\n\3\n\5\n\u0088\n\n\3\n\3\n\5\n\u008c\n\n\3",
    "\13\3\13\3\13\3\f\3\f\5\f\u0093\n\f\3\f\3\f\5\f\u0097\n\f\3\r\3\r\3",
    "\r\3\16\6\16\u009d\n\16\r\16\16\16\u009e\3\17\3\17\5\17\u00a3\n\17\3",
    "\20\3\20\3\20\7\20\u00a8\n\20\f\20\16\20\u00ab\13\20\3\21\3\21\3\21",
    "\3\22\3\22\3\22\3\22\3\22\7\22\u00b5\n\22\f\22\16\22\u00b8\13\22\3\22",
    "\3\22\5\22\u00bc\n\22\3\23\3\23\3\23\3\23\5\23\u00c2\n\23\3\24\6\24",
    "\u00c5\n\24\r\24\16\24\u00c6\3\25\3\25\3\25\7\25\u00cc\n\25\f\25\16",
    "\25\u00cf\13\25\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27\7\27\u00d9\n",
    "\27\f\27\16\27\u00dc\13\27\3\27\3\27\5\27\u00e0\n\27\3\30\3\30\5\30",
    "\u00e4\n\30\3\31\3\31\3\31\5\31\u00e9\n\31\3\32\3\32\3\32\7\32\u00ee",
    "\n\32\f\32\16\32\u00f1\13\32\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35",
    "\3\35\3\36\6\36\u00fd\n\36\r\36\16\36\u00fe\3\37\3\37\5\37\u0103\n\37",
    "\3 \3 \3 \3!\6!\u0109\n!\r!\16!\u010a\3\"\3\"\5\"\u010f\n\"\3#\3#\3",
    "$\3$\3%\3%\3&\3&\5&\u0119\n&\3\'\3\'\3\'\3\'\3\'\3(\3(\5(\u0122\n(\3",
    ")\3)\3)\3*\3*\5*\u0129\n*\3+\3+\3+\3+\3,\3,\3,\3,\3-\3-\3.\3.\3/\3/",
    "\3/\3/\3/\2\2\60\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60",
    "\62\64\668:<>@BDFHJLNPRTVXZ\\\2\6\3\2,-\3\2*+\3\2\21 \4\2##))\u012c",
    "\2`\3\2\2\2\4b\3\2\2\2\6k\3\2\2\2\bo\3\2\2\2\ns\3\2\2\2\fw\3\2\2\2\16",
    "~\3\2\2\2\20\u0080\3\2\2\2\22\u0085\3\2\2\2\24\u008d\3\2\2\2\26\u0090",
    "\3\2\2\2\30\u0098\3\2\2\2\32\u009c\3\2\2\2\34\u00a2\3\2\2\2\36\u00a4",
    "\3\2\2\2 \u00ac\3\2\2\2\"\u00bb\3\2\2\2$\u00c1\3\2\2\2&\u00c4\3\2\2",
    "\2(\u00c8\3\2\2\2*\u00d0\3\2\2\2,\u00df\3\2\2\2.\u00e3\3\2\2\2\60\u00e5",
    "\3\2\2\2\62\u00ea\3\2\2\2\64\u00f2\3\2\2\2\66\u00f5\3\2\2\28\u00f8\3",
    "\2\2\2:\u00fc\3\2\2\2<\u0100\3\2\2\2>\u0104\3\2\2\2@\u0108\3\2\2\2B",
    "\u010c\3\2\2\2D\u0110\3\2\2\2F\u0112\3\2\2\2H\u0114\3\2\2\2J\u0118\3",
    "\2\2\2L\u011a\3\2\2\2N\u011f\3\2\2\2P\u0123\3\2\2\2R\u0128\3\2\2\2T",
    "\u012a\3\2\2\2V\u012e\3\2\2\2X\u0132\3\2\2\2Z\u0134\3\2\2\2\\\u0136",
    "\3\2\2\2^a\5\4\3\2_a\5\66\34\2`^\3\2\2\2`_\3\2\2\2a\3\3\2\2\2bf\5\6",
    "\4\2ce\5\b\5\2dc\3\2\2\2eh\3\2\2\2fd\3\2\2\2fg\3\2\2\2gi\3\2\2\2hf\3",
    "\2\2\2ij\5\f\7\2j\5\3\2\2\2kl\7\3\2\2lm\5D#\2m\7\3\2\2\2np\5\n\6\2o",
    "n\3\2\2\2pq\3\2\2\2qo\3\2\2\2qr\3\2\2\2r\t\3\2\2\2st\7\4\2\2tu\5D#\2",
    "u\13\3\2\2\2vx\5\16\b\2wv\3\2\2\2xy\3\2\2\2yw\3\2\2\2yz\3\2\2\2z\r\3",
    "\2\2\2{\177\5\20\t\2|\177\5\22\n\2}\177\5\26\f\2~{\3\2\2\2~|\3\2\2\2",
    "~}\3\2\2\2\177\17\3\2\2\2\u0080\u0081\7\5\2\2\u0081\u0082\7*\2\2\u0082",
    "\u0083\7!\2\2\u0083\u0084\7\'\2\2\u0084\21\3\2\2\2\u0085\u0087\5\24",
    "\13\2\u0086\u0088\5\32\16\2\u0087\u0086\3\2\2\2\u0087\u0088\3\2\2\2",
    "\u0088\u008b\3\2\2\2\u0089\u008c\5\36\20\2\u008a\u008c\5&\24\2\u008b",
    "\u0089\3\2\2\2\u008b\u008a\3\2\2\2\u008c\23\3\2\2\2\u008d\u008e\7\6",
    "\2\2\u008e\u008f\5F$\2\u008f\25\3\2\2\2\u0090\u0092\5\30\r\2\u0091\u0093",
    "\5\32\16\2\u0092\u0091\3\2\2\2\u0092\u0093\3\2\2\2\u0093\u0096\3\2\2",
    "\2\u0094\u0097\5\36\20\2\u0095\u0097\5&\24\2\u0096\u0094\3\2\2\2\u0096",
    "\u0095\3\2\2\2\u0097\27\3\2\2\2\u0098\u0099\7\7\2\2\u0099\u009a\5F$",
    "\2\u009a\31\3\2\2\2\u009b\u009d\5\34\17\2\u009c\u009b\3\2\2\2\u009d",
    "\u009e\3\2\2\2\u009e\u009c\3\2\2\2\u009e\u009f\3\2\2\2\u009f\33\3\2",
    "\2\2\u00a0\u00a3\5\60\31\2\u00a1\u00a3\5\64\33\2\u00a2\u00a0\3\2\2\2",
    "\u00a2\u00a1\3\2\2\2\u00a3\35\3\2\2\2\u00a4\u00a9\5 \21\2\u00a5\u00a6",
    "\7\17\2\2\u00a6\u00a8\5 \21\2\u00a7\u00a5\3\2\2\2\u00a8\u00ab\3\2\2",
    "\2\u00a9\u00a7\3\2\2\2\u00a9\u00aa\3\2\2\2\u00aa\37\3\2\2\2\u00ab\u00a9",
    "\3\2\2\2\u00ac\u00ad\5\\/\2\u00ad\u00ae\5\"\22\2\u00ae!\3\2\2\2\u00af",
    "\u00bc\5$\23\2\u00b0\u00b1\7$\2\2\u00b1\u00b6\5$\23\2\u00b2\u00b3\7",
    "\17\2\2\u00b3\u00b5\5$\23\2\u00b4\u00b2\3\2\2\2\u00b5\u00b8\3\2\2\2",
    "\u00b6\u00b4\3\2\2\2\u00b6\u00b7\3\2\2\2\u00b7\u00b9\3\2\2\2\u00b8\u00b6",
    "\3\2\2\2\u00b9\u00ba\7%\2\2\u00ba\u00bc\3\2\2\2\u00bb\u00af\3\2\2\2",
    "\u00bb\u00b0\3\2\2\2\u00bc#\3\2\2\2\u00bd\u00c2\5J&\2\u00be\u00c2\5",
    "L\'\2\u00bf\u00c2\5R*\2\u00c0\u00c2\5Z.\2\u00c1\u00bd\3\2\2\2\u00c1",
    "\u00be\3\2\2\2\u00c1\u00bf\3\2\2\2\u00c1\u00c0\3\2\2\2\u00c2%\3\2\2",
    "\2\u00c3\u00c5\5(\25\2\u00c4\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6",
    "\u00c4\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\'\3\2\2\2\u00c8\u00cd\5*\26",
    "\2\u00c9\u00ca\7\17\2\2\u00ca\u00cc\5*\26\2\u00cb\u00c9\3\2\2\2\u00cc",
    "\u00cf\3\2\2\2\u00cd\u00cb\3\2\2\2\u00cd\u00ce\3\2\2\2\u00ce)\3\2\2",
    "\2\u00cf\u00cd\3\2\2\2\u00d0\u00d1\5\\/\2\u00d1\u00d2\5,\27\2\u00d2",
    "+\3\2\2\2\u00d3\u00e0\5.\30\2\u00d4\u00d5\7$\2\2\u00d5\u00da\5.\30\2",
    "\u00d6\u00d7\7\17\2\2\u00d7\u00d9\5.\30\2\u00d8\u00d6\3\2\2\2\u00d9",
    "\u00dc\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2\2\2\u00db\u00dd\3",
    "\2\2\2\u00dc\u00da\3\2\2\2\u00dd\u00de\7%\2\2\u00de\u00e0\3\2\2\2\u00df",
    "\u00d3\3\2\2\2\u00df\u00d4\3\2\2\2\u00e0-\3\2\2\2\u00e1\u00e4\5J&\2",
    "\u00e2\u00e4\5L\'\2\u00e3\u00e1\3\2\2\2\u00e3\u00e2\3\2\2\2\u00e4/\3",
    "\2\2\2\u00e5\u00e8\7\n\2\2\u00e6\u00e9\7\20\2\2\u00e7\u00e9\5\62\32",
    "\2\u00e8\u00e6\3\2\2\2\u00e8\u00e7\3\2\2\2\u00e9\61\3\2\2\2\u00ea\u00ef",
    "\5P)\2\u00eb\u00ec\7\"\2\2\u00ec\u00ee\5P)\2\u00ed\u00eb\3\2\2\2\u00ee",
    "\u00f1\3\2\2\2\u00ef\u00ed\3\2\2\2\u00ef\u00f0\3\2\2\2\u00f0\63\3\2",
    "\2\2\u00f1\u00ef\3\2\2\2\u00f2\u00f3\7\13\2\2\u00f3\u00f4\7/\2\2\u00f4",
    "\65\3\2\2\2\u00f5\u00f6\58\35\2\u00f6\u00f7\5:\36\2\u00f7\67\3\2\2\2",
    "\u00f8\u00f9\7\b\2\2\u00f9\u00fa\5D#\2\u00fa9\3\2\2\2\u00fb\u00fd\5",
    "<\37\2\u00fc\u00fb\3\2\2\2\u00fd\u00fe\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe",
    "\u00ff\3\2\2\2\u00ff;\3\2\2\2\u0100\u0102\5> \2\u0101\u0103\5@!\2\u0102",
    "\u0101\3\2\2\2\u0102\u0103\3\2\2\2\u0103=\3\2\2\2\u0104\u0105\7\t\2",
    "\2\u0105\u0106\7\'\2\2\u0106?\3\2\2\2\u0107\u0109\5B\"\2\u0108\u0107",
    "\3\2\2\2\u0109\u010a\3\2\2\2\u010a\u0108\3\2\2\2\u010a\u010b\3\2\2\2",
    "\u010bA\3\2\2\2\u010c\u010e\7(\2\2\u010d\u010f\7/\2\2\u010e\u010d\3",
    "\2\2\2\u010e\u010f\3\2\2\2\u010fC\3\2\2\2\u0110\u0111\t\2\2\2\u0111",
    "E\3\2\2\2\u0112\u0113\t\3\2\2\u0113G\3\2\2\2\u0114\u0115\7.\2\2\u0115",
    "I\3\2\2\2\u0116\u0119\5F$\2\u0117\u0119\5H%\2\u0118\u0116\3\2\2\2\u0118",
    "\u0117\3\2\2\2\u0119K\3\2\2\2\u011a\u011b\7\f\2\2\u011b\u011c\7$\2\2",
    "\u011c\u011d\5J&\2\u011d\u011e\7%\2\2\u011eM\3\2\2\2\u011f\u0121\7(",
    "\2\2\u0120\u0122\7\60\2\2\u0121\u0120\3\2\2\2\u0121\u0122\3\2\2\2\u0122",
    "O\3\2\2\2\u0123\u0124\7*\2\2\u0124\u0125\5N(\2\u0125Q\3\2\2\2\u0126",
    "\u0129\5T+\2\u0127\u0129\5V,\2\u0128\u0126\3\2\2\2\u0128\u0127\3\2\2",
    "\2\u0129S\3\2\2\2\u012a\u012b\7\33\2\2\u012b\u012c\7\16\2\2\u012c\u012d",
    "\5X-\2\u012dU\3\2\2\2\u012e\u012f\7\33\2\2\u012f\u0130\7\r\2\2\u0130",
    "\u0131\5P)\2\u0131W\3\2\2\2\u0132\u0133\7\'\2\2\u0133Y\3\2\2\2\u0134",
    "\u0135\t\4\2\2\u0135[\3\2\2\2\u0136\u0137\7)\2\2\u0137\u0138\7&\2\2",
    "\u0138\u0139\t\5\2\2\u0139]\3\2\2\2\37`fqy~\u0087\u008b\u0092\u0096",
    "\u009e\u00a2\u00a9\u00b6\u00bb\u00c1\u00c6\u00cd\u00da\u00df\u00e3\u00e8",
    "\u00ef\u00fe\u0102\u010a\u010e\u0118\u0121\u0128"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ 'null', "'DataDefinitions:'", "'Uses:'", "'Vocabulary:'", 
                     "'Element:'", "'Entry:'", "'ValueSetDefinitions:'", 
                     "'ValueSet:'", "'Concept:'", "'Description:'", "'ref'", 
                     "'descending from'", "'from'", "'or'", "'TBD'", "'boolean'", 
                     "'integer'", "'string'", "'decimal'", "'uri'", "'base64Binary'", 
                     "'instant'", "'date'", "'dateTime'", "'time'", "'code'", 
                     "'oid'", "'id'", "'markdown'", "'unsignedInt'", "'positiveInt'", 
                     "'='", "','", "'*'", "'('", "')'", "'..'" ];

var symbolicNames = [ 'null', "KW_DATA_DEFINITIONS", "KW_USES", "KW_VOCABULARY", 
                      "KW_ELEMENT", "KW_ENTRY", "KW_VALUESET_DEFINITIONS", 
                      "KW_VALUESET", "KW_CONCEPT", "KW_DESCRIPTION", "KW_REF", 
                      "KW_DESCENDING_FROM", "KW_FROM", "KW_OR", "KW_TBD", 
                      "KW_BOOLEAN", "KW_INTEGER", "KW_STRING", "KW_DECIMAL", 
                      "KW_URI", "KW_BASE64_BINARY", "KW_INSTANT", "KW_DATE", 
                      "KW_DATE_TIME", "KW_TIME", "KW_CODE", "KW_OID", "KW_ID", 
                      "KW_MARKDOWN", "KW_UNSIGNED_INT", "KW_POSITIVE_INT", 
                      "EQUAL", "COMMA", "STAR", "OPEN_PAREN", "CLOSE_PAREN", 
                      "RANGE", "URL", "CODE", "WHOLE_NUMBER", "ALL_CAPS", 
                      "UPPER_WORD", "LOWER_WORD", "DOT_SEPARATED_LW", "DOT_SEPARATED_UW", 
                      "STRING", "EXTRA_INFO", "WS", "NEWLINE", "COMMENT", 
                      "LINE_COMMENT" ];

var ruleNames =  [ "shr", "dataDefsDoc", "dataDefsHeader", "usesStatements", 
                   "usesStatement", "dataDefs", "dataDef", "vocabularyDef", 
                   "elementDef", "elementHeader", "entryDef", "entryHeader", 
                   "elementProps", "elementProp", "singleValue", "countedType", 
                   "types", "type", "multiValue", "countedElements", "countedElement", 
                   "elements", "element", "conceptProp", "concepts", "descriptionProp", 
                   "valuesetDefsDoc", "valuesetDefsHeader", "valuesetDefs", 
                   "valuesetDef", "valuesetHeader", "valuesetValues", "valuesetValue", 
                   "namespace", "simpleName", "fullyQualifiedName", "simpleOrFQName", 
                   "ref", "code", "fullyQualifiedCode", "codeConstraint", 
                   "codeFromValueset", "codeDescendent", "valueset", "primitive", 
                   "count" ];

function SHRParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SHRParser.prototype = Object.create(antlr4.Parser.prototype);
SHRParser.prototype.constructor = SHRParser;

Object.defineProperty(SHRParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SHRParser.EOF = antlr4.Token.EOF;
SHRParser.KW_DATA_DEFINITIONS = 1;
SHRParser.KW_USES = 2;
SHRParser.KW_VOCABULARY = 3;
SHRParser.KW_ELEMENT = 4;
SHRParser.KW_ENTRY = 5;
SHRParser.KW_VALUESET_DEFINITIONS = 6;
SHRParser.KW_VALUESET = 7;
SHRParser.KW_CONCEPT = 8;
SHRParser.KW_DESCRIPTION = 9;
SHRParser.KW_REF = 10;
SHRParser.KW_DESCENDING_FROM = 11;
SHRParser.KW_FROM = 12;
SHRParser.KW_OR = 13;
SHRParser.KW_TBD = 14;
SHRParser.KW_BOOLEAN = 15;
SHRParser.KW_INTEGER = 16;
SHRParser.KW_STRING = 17;
SHRParser.KW_DECIMAL = 18;
SHRParser.KW_URI = 19;
SHRParser.KW_BASE64_BINARY = 20;
SHRParser.KW_INSTANT = 21;
SHRParser.KW_DATE = 22;
SHRParser.KW_DATE_TIME = 23;
SHRParser.KW_TIME = 24;
SHRParser.KW_CODE = 25;
SHRParser.KW_OID = 26;
SHRParser.KW_ID = 27;
SHRParser.KW_MARKDOWN = 28;
SHRParser.KW_UNSIGNED_INT = 29;
SHRParser.KW_POSITIVE_INT = 30;
SHRParser.EQUAL = 31;
SHRParser.COMMA = 32;
SHRParser.STAR = 33;
SHRParser.OPEN_PAREN = 34;
SHRParser.CLOSE_PAREN = 35;
SHRParser.RANGE = 36;
SHRParser.URL = 37;
SHRParser.CODE = 38;
SHRParser.WHOLE_NUMBER = 39;
SHRParser.ALL_CAPS = 40;
SHRParser.UPPER_WORD = 41;
SHRParser.LOWER_WORD = 42;
SHRParser.DOT_SEPARATED_LW = 43;
SHRParser.DOT_SEPARATED_UW = 44;
SHRParser.STRING = 45;
SHRParser.EXTRA_INFO = 46;
SHRParser.WS = 47;
SHRParser.NEWLINE = 48;
SHRParser.COMMENT = 49;
SHRParser.LINE_COMMENT = 50;

SHRParser.RULE_shr = 0;
SHRParser.RULE_dataDefsDoc = 1;
SHRParser.RULE_dataDefsHeader = 2;
SHRParser.RULE_usesStatements = 3;
SHRParser.RULE_usesStatement = 4;
SHRParser.RULE_dataDefs = 5;
SHRParser.RULE_dataDef = 6;
SHRParser.RULE_vocabularyDef = 7;
SHRParser.RULE_elementDef = 8;
SHRParser.RULE_elementHeader = 9;
SHRParser.RULE_entryDef = 10;
SHRParser.RULE_entryHeader = 11;
SHRParser.RULE_elementProps = 12;
SHRParser.RULE_elementProp = 13;
SHRParser.RULE_singleValue = 14;
SHRParser.RULE_countedType = 15;
SHRParser.RULE_types = 16;
SHRParser.RULE_type = 17;
SHRParser.RULE_multiValue = 18;
SHRParser.RULE_countedElements = 19;
SHRParser.RULE_countedElement = 20;
SHRParser.RULE_elements = 21;
SHRParser.RULE_element = 22;
SHRParser.RULE_conceptProp = 23;
SHRParser.RULE_concepts = 24;
SHRParser.RULE_descriptionProp = 25;
SHRParser.RULE_valuesetDefsDoc = 26;
SHRParser.RULE_valuesetDefsHeader = 27;
SHRParser.RULE_valuesetDefs = 28;
SHRParser.RULE_valuesetDef = 29;
SHRParser.RULE_valuesetHeader = 30;
SHRParser.RULE_valuesetValues = 31;
SHRParser.RULE_valuesetValue = 32;
SHRParser.RULE_namespace = 33;
SHRParser.RULE_simpleName = 34;
SHRParser.RULE_fullyQualifiedName = 35;
SHRParser.RULE_simpleOrFQName = 36;
SHRParser.RULE_ref = 37;
SHRParser.RULE_code = 38;
SHRParser.RULE_fullyQualifiedCode = 39;
SHRParser.RULE_codeConstraint = 40;
SHRParser.RULE_codeFromValueset = 41;
SHRParser.RULE_codeDescendent = 42;
SHRParser.RULE_valueset = 43;
SHRParser.RULE_primitive = 44;
SHRParser.RULE_count = 45;

function ShrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_shr;
    return this;
}

ShrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShrContext.prototype.constructor = ShrContext;

ShrContext.prototype.dataDefsDoc = function() {
    return this.getTypedRuleContext(DataDefsDocContext,0);
};

ShrContext.prototype.valuesetDefsDoc = function() {
    return this.getTypedRuleContext(ValuesetDefsDocContext,0);
};

ShrContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterShr(this);
	}
};

ShrContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitShr(this);
	}
};

ShrContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitShr(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ShrContext = ShrContext;

SHRParser.prototype.shr = function() {

    var localctx = new ShrContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SHRParser.RULE_shr);
    try {
        this.state = 94;
        switch(this._input.LA(1)) {
        case SHRParser.KW_DATA_DEFINITIONS:
            this.enterOuterAlt(localctx, 1);
            this.state = 92;
            this.dataDefsDoc();
            break;
        case SHRParser.KW_VALUESET_DEFINITIONS:
            this.enterOuterAlt(localctx, 2);
            this.state = 93;
            this.valuesetDefsDoc();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataDefsDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDefsDoc;
    return this;
}

DataDefsDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsDocContext.prototype.constructor = DataDefsDocContext;

DataDefsDocContext.prototype.dataDefsHeader = function() {
    return this.getTypedRuleContext(DataDefsHeaderContext,0);
};

DataDefsDocContext.prototype.dataDefs = function() {
    return this.getTypedRuleContext(DataDefsContext,0);
};

DataDefsDocContext.prototype.usesStatements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsesStatementsContext);
    } else {
        return this.getTypedRuleContext(UsesStatementsContext,i);
    }
};

DataDefsDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefsDoc(this);
	}
};

DataDefsDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefsDoc(this);
	}
};

DataDefsDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefsDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsDocContext = DataDefsDocContext;

SHRParser.prototype.dataDefsDoc = function() {

    var localctx = new DataDefsDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SHRParser.RULE_dataDefsDoc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 96;
        this.dataDefsHeader();
        this.state = 100;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_USES) {
            this.state = 97;
            this.usesStatements();
            this.state = 102;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 103;
        this.dataDefs();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataDefsHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDefsHeader;
    return this;
}

DataDefsHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsHeaderContext.prototype.constructor = DataDefsHeaderContext;

DataDefsHeaderContext.prototype.KW_DATA_DEFINITIONS = function() {
    return this.getToken(SHRParser.KW_DATA_DEFINITIONS, 0);
};

DataDefsHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

DataDefsHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefsHeader(this);
	}
};

DataDefsHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefsHeader(this);
	}
};

DataDefsHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefsHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsHeaderContext = DataDefsHeaderContext;

SHRParser.prototype.dataDefsHeader = function() {

    var localctx = new DataDefsHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SHRParser.RULE_dataDefsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 105;
        this.match(SHRParser.KW_DATA_DEFINITIONS);
        this.state = 106;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsesStatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_usesStatements;
    return this;
}

UsesStatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsesStatementsContext.prototype.constructor = UsesStatementsContext;

UsesStatementsContext.prototype.usesStatement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsesStatementContext);
    } else {
        return this.getTypedRuleContext(UsesStatementContext,i);
    }
};

UsesStatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterUsesStatements(this);
	}
};

UsesStatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitUsesStatements(this);
	}
};

UsesStatementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitUsesStatements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.UsesStatementsContext = UsesStatementsContext;

SHRParser.prototype.usesStatements = function() {

    var localctx = new UsesStatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, SHRParser.RULE_usesStatements);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 109; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 108;
        		this.usesStatement();
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 111; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsesStatementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_usesStatement;
    return this;
}

UsesStatementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsesStatementContext.prototype.constructor = UsesStatementContext;

UsesStatementContext.prototype.KW_USES = function() {
    return this.getToken(SHRParser.KW_USES, 0);
};

UsesStatementContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

UsesStatementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterUsesStatement(this);
	}
};

UsesStatementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitUsesStatement(this);
	}
};

UsesStatementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitUsesStatement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.UsesStatementContext = UsesStatementContext;

SHRParser.prototype.usesStatement = function() {

    var localctx = new UsesStatementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, SHRParser.RULE_usesStatement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 113;
        this.match(SHRParser.KW_USES);
        this.state = 114;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDefs;
    return this;
}

DataDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefsContext.prototype.constructor = DataDefsContext;

DataDefsContext.prototype.dataDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(DataDefContext);
    } else {
        return this.getTypedRuleContext(DataDefContext,i);
    }
};

DataDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDefs(this);
	}
};

DataDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDefs(this);
	}
};

DataDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefsContext = DataDefsContext;

SHRParser.prototype.dataDefs = function() {

    var localctx = new DataDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, SHRParser.RULE_dataDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 117; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 116;
            this.dataDef();
            this.state = 119; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_VOCABULARY) | (1 << SHRParser.KW_ELEMENT) | (1 << SHRParser.KW_ENTRY))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DataDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_dataDef;
    return this;
}

DataDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DataDefContext.prototype.constructor = DataDefContext;

DataDefContext.prototype.vocabularyDef = function() {
    return this.getTypedRuleContext(VocabularyDefContext,0);
};

DataDefContext.prototype.elementDef = function() {
    return this.getTypedRuleContext(ElementDefContext,0);
};

DataDefContext.prototype.entryDef = function() {
    return this.getTypedRuleContext(EntryDefContext,0);
};

DataDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDataDef(this);
	}
};

DataDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDataDef(this);
	}
};

DataDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDataDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DataDefContext = DataDefContext;

SHRParser.prototype.dataDef = function() {

    var localctx = new DataDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, SHRParser.RULE_dataDef);
    try {
        this.state = 124;
        switch(this._input.LA(1)) {
        case SHRParser.KW_VOCABULARY:
            this.enterOuterAlt(localctx, 1);
            this.state = 121;
            this.vocabularyDef();
            break;
        case SHRParser.KW_ELEMENT:
            this.enterOuterAlt(localctx, 2);
            this.state = 122;
            this.elementDef();
            break;
        case SHRParser.KW_ENTRY:
            this.enterOuterAlt(localctx, 3);
            this.state = 123;
            this.entryDef();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function VocabularyDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_vocabularyDef;
    return this;
}

VocabularyDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VocabularyDefContext.prototype.constructor = VocabularyDefContext;

VocabularyDefContext.prototype.KW_VOCABULARY = function() {
    return this.getToken(SHRParser.KW_VOCABULARY, 0);
};

VocabularyDefContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

VocabularyDefContext.prototype.EQUAL = function() {
    return this.getToken(SHRParser.EQUAL, 0);
};

VocabularyDefContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

VocabularyDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitVocabularyDef(this);
	}
};

VocabularyDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitVocabularyDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.VocabularyDefContext = VocabularyDefContext;

SHRParser.prototype.vocabularyDef = function() {

    var localctx = new VocabularyDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, SHRParser.RULE_vocabularyDef);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 126;
        this.match(SHRParser.KW_VOCABULARY);
        this.state = 127;
        this.match(SHRParser.ALL_CAPS);
        this.state = 128;
        this.match(SHRParser.EQUAL);
        this.state = 129;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementDef;
    return this;
}

ElementDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementDefContext.prototype.constructor = ElementDefContext;

ElementDefContext.prototype.elementHeader = function() {
    return this.getTypedRuleContext(ElementHeaderContext,0);
};

ElementDefContext.prototype.singleValue = function() {
    return this.getTypedRuleContext(SingleValueContext,0);
};

ElementDefContext.prototype.multiValue = function() {
    return this.getTypedRuleContext(MultiValueContext,0);
};

ElementDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

ElementDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementDef(this);
	}
};

ElementDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementDef(this);
	}
};

ElementDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementDefContext = ElementDefContext;

SHRParser.prototype.elementDef = function() {

    var localctx = new ElementDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, SHRParser.RULE_elementDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 131;
        this.elementHeader();
        this.state = 133;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 132;
            this.elementProps();
        }

        this.state = 137;
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.state = 135;
            this.singleValue();
            break;

        case 2:
            this.state = 136;
            this.multiValue();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementHeader;
    return this;
}

ElementHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementHeaderContext.prototype.constructor = ElementHeaderContext;

ElementHeaderContext.prototype.KW_ELEMENT = function() {
    return this.getToken(SHRParser.KW_ELEMENT, 0);
};

ElementHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

ElementHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementHeader(this);
	}
};

ElementHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementHeader(this);
	}
};

ElementHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementHeaderContext = ElementHeaderContext;

SHRParser.prototype.elementHeader = function() {

    var localctx = new ElementHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, SHRParser.RULE_elementHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 139;
        this.match(SHRParser.KW_ELEMENT);
        this.state = 140;
        this.simpleName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryDef;
    return this;
}

EntryDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryDefContext.prototype.constructor = EntryDefContext;

EntryDefContext.prototype.entryHeader = function() {
    return this.getTypedRuleContext(EntryHeaderContext,0);
};

EntryDefContext.prototype.singleValue = function() {
    return this.getTypedRuleContext(SingleValueContext,0);
};

EntryDefContext.prototype.multiValue = function() {
    return this.getTypedRuleContext(MultiValueContext,0);
};

EntryDefContext.prototype.elementProps = function() {
    return this.getTypedRuleContext(ElementPropsContext,0);
};

EntryDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryDef(this);
	}
};

EntryDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryDef(this);
	}
};

EntryDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryDefContext = EntryDefContext;

SHRParser.prototype.entryDef = function() {

    var localctx = new EntryDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, SHRParser.RULE_entryDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 142;
        this.entryHeader();
        this.state = 144;
        _la = this._input.LA(1);
        if(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION) {
            this.state = 143;
            this.elementProps();
        }

        this.state = 148;
        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
        switch(la_) {
        case 1:
            this.state = 146;
            this.singleValue();
            break;

        case 2:
            this.state = 147;
            this.multiValue();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EntryHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_entryHeader;
    return this;
}

EntryHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntryHeaderContext.prototype.constructor = EntryHeaderContext;

EntryHeaderContext.prototype.KW_ENTRY = function() {
    return this.getToken(SHRParser.KW_ENTRY, 0);
};

EntryHeaderContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

EntryHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterEntryHeader(this);
	}
};

EntryHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitEntryHeader(this);
	}
};

EntryHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitEntryHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.EntryHeaderContext = EntryHeaderContext;

SHRParser.prototype.entryHeader = function() {

    var localctx = new EntryHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, SHRParser.RULE_entryHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 150;
        this.match(SHRParser.KW_ENTRY);
        this.state = 151;
        this.simpleName();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementPropsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementProps;
    return this;
}

ElementPropsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropsContext.prototype.constructor = ElementPropsContext;

ElementPropsContext.prototype.elementProp = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementPropContext);
    } else {
        return this.getTypedRuleContext(ElementPropContext,i);
    }
};

ElementPropsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementProps(this);
	}
};

ElementPropsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementProps(this);
	}
};

ElementPropsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementProps(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementPropsContext = ElementPropsContext;

SHRParser.prototype.elementProps = function() {

    var localctx = new ElementPropsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, SHRParser.RULE_elementProps);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 154; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 153;
            this.elementProp();
            this.state = 156; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_CONCEPT || _la===SHRParser.KW_DESCRIPTION);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elementProp;
    return this;
}

ElementPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementPropContext.prototype.constructor = ElementPropContext;

ElementPropContext.prototype.conceptProp = function() {
    return this.getTypedRuleContext(ConceptPropContext,0);
};

ElementPropContext.prototype.descriptionProp = function() {
    return this.getTypedRuleContext(DescriptionPropContext,0);
};

ElementPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElementProp(this);
	}
};

ElementPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElementProp(this);
	}
};

ElementPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElementProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementPropContext = ElementPropContext;

SHRParser.prototype.elementProp = function() {

    var localctx = new ElementPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, SHRParser.RULE_elementProp);
    try {
        this.state = 160;
        switch(this._input.LA(1)) {
        case SHRParser.KW_CONCEPT:
            this.enterOuterAlt(localctx, 1);
            this.state = 158;
            this.conceptProp();
            break;
        case SHRParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 2);
            this.state = 159;
            this.descriptionProp();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SingleValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_singleValue;
    return this;
}

SingleValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SingleValueContext.prototype.constructor = SingleValueContext;

SingleValueContext.prototype.countedType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedTypeContext);
    } else {
        return this.getTypedRuleContext(CountedTypeContext,i);
    }
};

SingleValueContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


SingleValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSingleValue(this);
	}
};

SingleValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSingleValue(this);
	}
};

SingleValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSingleValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SingleValueContext = SingleValueContext;

SHRParser.prototype.singleValue = function() {

    var localctx = new SingleValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, SHRParser.RULE_singleValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 162;
        this.countedType();
        this.state = 167;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 163;
            this.match(SHRParser.KW_OR);
            this.state = 164;
            this.countedType();
            this.state = 169;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountedTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedType;
    return this;
}

CountedTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedTypeContext.prototype.constructor = CountedTypeContext;

CountedTypeContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedTypeContext.prototype.types = function() {
    return this.getTypedRuleContext(TypesContext,0);
};

CountedTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedType(this);
	}
};

CountedTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedType(this);
	}
};

CountedTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedTypeContext = CountedTypeContext;

SHRParser.prototype.countedType = function() {

    var localctx = new CountedTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, SHRParser.RULE_countedType);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 170;
        this.count();
        this.state = 171;
        this.types();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_types;
    return this;
}

TypesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypesContext.prototype.constructor = TypesContext;

TypesContext.prototype.type = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TypeContext);
    } else {
        return this.getTypedRuleContext(TypeContext,i);
    }
};

TypesContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

TypesContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

TypesContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


TypesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterTypes(this);
	}
};

TypesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitTypes(this);
	}
};

TypesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitTypes(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TypesContext = TypesContext;

SHRParser.prototype.types = function() {

    var localctx = new TypesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, SHRParser.RULE_types);
    var _la = 0; // Token type
    try {
        this.state = 185;
        switch(this._input.LA(1)) {
        case SHRParser.KW_REF:
        case SHRParser.KW_BOOLEAN:
        case SHRParser.KW_INTEGER:
        case SHRParser.KW_STRING:
        case SHRParser.KW_DECIMAL:
        case SHRParser.KW_URI:
        case SHRParser.KW_BASE64_BINARY:
        case SHRParser.KW_INSTANT:
        case SHRParser.KW_DATE:
        case SHRParser.KW_DATE_TIME:
        case SHRParser.KW_TIME:
        case SHRParser.KW_CODE:
        case SHRParser.KW_OID:
        case SHRParser.KW_ID:
        case SHRParser.KW_MARKDOWN:
        case SHRParser.KW_UNSIGNED_INT:
        case SHRParser.KW_POSITIVE_INT:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 173;
            this.type();
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 174;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 175;
            this.type();
            this.state = 180;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 176;
                this.match(SHRParser.KW_OR);
                this.state = 177;
                this.type();
                this.state = 182;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 183;
            this.match(SHRParser.CLOSE_PAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function TypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_type;
    return this;
}

TypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TypeContext.prototype.constructor = TypeContext;

TypeContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

TypeContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

TypeContext.prototype.codeConstraint = function() {
    return this.getTypedRuleContext(CodeConstraintContext,0);
};

TypeContext.prototype.primitive = function() {
    return this.getTypedRuleContext(PrimitiveContext,0);
};

TypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterType(this);
	}
};

TypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitType(this);
	}
};

TypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.TypeContext = TypeContext;

SHRParser.prototype.type = function() {

    var localctx = new TypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, SHRParser.RULE_type);
    try {
        this.state = 191;
        var la_ = this._interp.adaptivePredict(this._input,14,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 187;
            this.simpleOrFQName();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 188;
            this.ref();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 189;
            this.codeConstraint();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 190;
            this.primitive();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MultiValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_multiValue;
    return this;
}

MultiValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MultiValueContext.prototype.constructor = MultiValueContext;

MultiValueContext.prototype.countedElements = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedElementsContext);
    } else {
        return this.getTypedRuleContext(CountedElementsContext,i);
    }
};

MultiValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterMultiValue(this);
	}
};

MultiValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitMultiValue(this);
	}
};

MultiValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitMultiValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.MultiValueContext = MultiValueContext;

SHRParser.prototype.multiValue = function() {

    var localctx = new MultiValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, SHRParser.RULE_multiValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 193;
            this.countedElements();
            this.state = 196; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.WHOLE_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountedElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedElements;
    return this;
}

CountedElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedElementsContext.prototype.constructor = CountedElementsContext;

CountedElementsContext.prototype.countedElement = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CountedElementContext);
    } else {
        return this.getTypedRuleContext(CountedElementContext,i);
    }
};

CountedElementsContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


CountedElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedElements(this);
	}
};

CountedElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedElements(this);
	}
};

CountedElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedElementsContext = CountedElementsContext;

SHRParser.prototype.countedElements = function() {

    var localctx = new CountedElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, SHRParser.RULE_countedElements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 198;
        this.countedElement();
        this.state = 203;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.KW_OR) {
            this.state = 199;
            this.match(SHRParser.KW_OR);
            this.state = 200;
            this.countedElement();
            this.state = 205;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountedElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_countedElement;
    return this;
}

CountedElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountedElementContext.prototype.constructor = CountedElementContext;

CountedElementContext.prototype.count = function() {
    return this.getTypedRuleContext(CountContext,0);
};

CountedElementContext.prototype.elements = function() {
    return this.getTypedRuleContext(ElementsContext,0);
};

CountedElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCountedElement(this);
	}
};

CountedElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCountedElement(this);
	}
};

CountedElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCountedElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountedElementContext = CountedElementContext;

SHRParser.prototype.countedElement = function() {

    var localctx = new CountedElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, SHRParser.RULE_countedElement);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 206;
        this.count();
        this.state = 207;
        this.elements();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_elements;
    return this;
}

ElementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementsContext.prototype.constructor = ElementsContext;

ElementsContext.prototype.element = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ElementContext);
    } else {
        return this.getTypedRuleContext(ElementContext,i);
    }
};

ElementsContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

ElementsContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

ElementsContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.KW_OR);
    } else {
        return this.getToken(SHRParser.KW_OR, i);
    }
};


ElementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElements(this);
	}
};

ElementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElements(this);
	}
};

ElementsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElements(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementsContext = ElementsContext;

SHRParser.prototype.elements = function() {

    var localctx = new ElementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, SHRParser.RULE_elements);
    var _la = 0; // Token type
    try {
        this.state = 221;
        switch(this._input.LA(1)) {
        case SHRParser.KW_REF:
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.element();
            break;
        case SHRParser.OPEN_PAREN:
            this.enterOuterAlt(localctx, 2);
            this.state = 210;
            this.match(SHRParser.OPEN_PAREN);
            this.state = 211;
            this.element();
            this.state = 216;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===SHRParser.KW_OR) {
                this.state = 212;
                this.match(SHRParser.KW_OR);
                this.state = 213;
                this.element();
                this.state = 218;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 219;
            this.match(SHRParser.CLOSE_PAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ElementContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_element;
    return this;
}

ElementContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ElementContext.prototype.constructor = ElementContext;

ElementContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

ElementContext.prototype.ref = function() {
    return this.getTypedRuleContext(RefContext,0);
};

ElementContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterElement(this);
	}
};

ElementContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitElement(this);
	}
};

ElementContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitElement(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ElementContext = ElementContext;

SHRParser.prototype.element = function() {

    var localctx = new ElementContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, SHRParser.RULE_element);
    try {
        this.state = 225;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.simpleOrFQName();
            break;
        case SHRParser.KW_REF:
            this.enterOuterAlt(localctx, 2);
            this.state = 224;
            this.ref();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_conceptProp;
    return this;
}

ConceptPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptPropContext.prototype.constructor = ConceptPropContext;

ConceptPropContext.prototype.KW_CONCEPT = function() {
    return this.getToken(SHRParser.KW_CONCEPT, 0);
};

ConceptPropContext.prototype.KW_TBD = function() {
    return this.getToken(SHRParser.KW_TBD, 0);
};

ConceptPropContext.prototype.concepts = function() {
    return this.getTypedRuleContext(ConceptsContext,0);
};

ConceptPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterConceptProp(this);
	}
};

ConceptPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitConceptProp(this);
	}
};

ConceptPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitConceptProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ConceptPropContext = ConceptPropContext;

SHRParser.prototype.conceptProp = function() {

    var localctx = new ConceptPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, SHRParser.RULE_conceptProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(SHRParser.KW_CONCEPT);
        this.state = 230;
        switch(this._input.LA(1)) {
        case SHRParser.KW_TBD:
            this.state = 228;
            this.match(SHRParser.KW_TBD);
            break;
        case SHRParser.ALL_CAPS:
            this.state = 229;
            this.concepts();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ConceptsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_concepts;
    return this;
}

ConceptsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptsContext.prototype.constructor = ConceptsContext;

ConceptsContext.prototype.fullyQualifiedCode = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FullyQualifiedCodeContext);
    } else {
        return this.getTypedRuleContext(FullyQualifiedCodeContext,i);
    }
};

ConceptsContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.COMMA);
    } else {
        return this.getToken(SHRParser.COMMA, i);
    }
};


ConceptsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterConcepts(this);
	}
};

ConceptsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitConcepts(this);
	}
};

ConceptsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitConcepts(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ConceptsContext = ConceptsContext;

SHRParser.prototype.concepts = function() {

    var localctx = new ConceptsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, SHRParser.RULE_concepts);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 232;
        this.fullyQualifiedCode();
        this.state = 237;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SHRParser.COMMA) {
            this.state = 233;
            this.match(SHRParser.COMMA);
            this.state = 234;
            this.fullyQualifiedCode();
            this.state = 239;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function DescriptionPropContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_descriptionProp;
    return this;
}

DescriptionPropContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionPropContext.prototype.constructor = DescriptionPropContext;

DescriptionPropContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(SHRParser.KW_DESCRIPTION, 0);
};

DescriptionPropContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

DescriptionPropContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitDescriptionProp(this);
	}
};

DescriptionPropContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitDescriptionProp(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.DescriptionPropContext = DescriptionPropContext;

SHRParser.prototype.descriptionProp = function() {

    var localctx = new DescriptionPropContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, SHRParser.RULE_descriptionProp);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(SHRParser.KW_DESCRIPTION);
        this.state = 241;
        this.match(SHRParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefsDocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefsDoc;
    return this;
}

ValuesetDefsDocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsDocContext.prototype.constructor = ValuesetDefsDocContext;

ValuesetDefsDocContext.prototype.valuesetDefsHeader = function() {
    return this.getTypedRuleContext(ValuesetDefsHeaderContext,0);
};

ValuesetDefsDocContext.prototype.valuesetDefs = function() {
    return this.getTypedRuleContext(ValuesetDefsContext,0);
};

ValuesetDefsDocContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefsDoc(this);
	}
};

ValuesetDefsDocContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefsDoc(this);
	}
};

ValuesetDefsDocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefsDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsDocContext = ValuesetDefsDocContext;

SHRParser.prototype.valuesetDefsDoc = function() {

    var localctx = new ValuesetDefsDocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, SHRParser.RULE_valuesetDefsDoc);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.valuesetDefsHeader();
        this.state = 244;
        this.valuesetDefs();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefsHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefsHeader;
    return this;
}

ValuesetDefsHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsHeaderContext.prototype.constructor = ValuesetDefsHeaderContext;

ValuesetDefsHeaderContext.prototype.KW_VALUESET_DEFINITIONS = function() {
    return this.getToken(SHRParser.KW_VALUESET_DEFINITIONS, 0);
};

ValuesetDefsHeaderContext.prototype.namespace = function() {
    return this.getTypedRuleContext(NamespaceContext,0);
};

ValuesetDefsHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefsHeader(this);
	}
};

ValuesetDefsHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefsHeader(this);
	}
};

ValuesetDefsHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefsHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsHeaderContext = ValuesetDefsHeaderContext;

SHRParser.prototype.valuesetDefsHeader = function() {

    var localctx = new ValuesetDefsHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, SHRParser.RULE_valuesetDefsHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 246;
        this.match(SHRParser.KW_VALUESET_DEFINITIONS);
        this.state = 247;
        this.namespace();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDefs;
    return this;
}

ValuesetDefsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefsContext.prototype.constructor = ValuesetDefsContext;

ValuesetDefsContext.prototype.valuesetDef = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetDefContext);
    } else {
        return this.getTypedRuleContext(ValuesetDefContext,i);
    }
};

ValuesetDefsContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDefs(this);
	}
};

ValuesetDefsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDefs(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefsContext = ValuesetDefsContext;

SHRParser.prototype.valuesetDefs = function() {

    var localctx = new ValuesetDefsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, SHRParser.RULE_valuesetDefs);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 250; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 249;
            this.valuesetDef();
            this.state = 252; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.KW_VALUESET);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetDefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetDef;
    return this;
}

ValuesetDefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetDefContext.prototype.constructor = ValuesetDefContext;

ValuesetDefContext.prototype.valuesetHeader = function() {
    return this.getTypedRuleContext(ValuesetHeaderContext,0);
};

ValuesetDefContext.prototype.valuesetValues = function() {
    return this.getTypedRuleContext(ValuesetValuesContext,0);
};

ValuesetDefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetDef(this);
	}
};

ValuesetDefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetDef(this);
	}
};

ValuesetDefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetDef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetDefContext = ValuesetDefContext;

SHRParser.prototype.valuesetDef = function() {

    var localctx = new ValuesetDefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, SHRParser.RULE_valuesetDef);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 254;
        this.valuesetHeader();
        this.state = 256;
        _la = this._input.LA(1);
        if(_la===SHRParser.CODE) {
            this.state = 255;
            this.valuesetValues();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetHeaderContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetHeader;
    return this;
}

ValuesetHeaderContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetHeaderContext.prototype.constructor = ValuesetHeaderContext;

ValuesetHeaderContext.prototype.KW_VALUESET = function() {
    return this.getToken(SHRParser.KW_VALUESET, 0);
};

ValuesetHeaderContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetHeaderContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetHeader(this);
	}
};

ValuesetHeaderContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetHeader(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetHeaderContext = ValuesetHeaderContext;

SHRParser.prototype.valuesetHeader = function() {

    var localctx = new ValuesetHeaderContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, SHRParser.RULE_valuesetHeader);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 258;
        this.match(SHRParser.KW_VALUESET);
        this.state = 259;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetValuesContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetValues;
    return this;
}

ValuesetValuesContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetValuesContext.prototype.constructor = ValuesetValuesContext;

ValuesetValuesContext.prototype.valuesetValue = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ValuesetValueContext);
    } else {
        return this.getTypedRuleContext(ValuesetValueContext,i);
    }
};

ValuesetValuesContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetValues(this);
	}
};

ValuesetValuesContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetValues(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetValuesContext = ValuesetValuesContext;

SHRParser.prototype.valuesetValues = function() {

    var localctx = new ValuesetValuesContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, SHRParser.RULE_valuesetValues);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 262; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 261;
            this.valuesetValue();
            this.state = 264; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SHRParser.CODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valuesetValue;
    return this;
}

ValuesetValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetValueContext.prototype.constructor = ValuesetValueContext;

ValuesetValueContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

ValuesetValueContext.prototype.STRING = function() {
    return this.getToken(SHRParser.STRING, 0);
};

ValuesetValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValuesetValue(this);
	}
};

ValuesetValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValuesetValue(this);
	}
};

ValuesetValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValuesetValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetValueContext = ValuesetValueContext;

SHRParser.prototype.valuesetValue = function() {

    var localctx = new ValuesetValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, SHRParser.RULE_valuesetValue);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 266;
        this.match(SHRParser.CODE);
        this.state = 268;
        _la = this._input.LA(1);
        if(_la===SHRParser.STRING) {
            this.state = 267;
            this.match(SHRParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NamespaceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_namespace;
    return this;
}

NamespaceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NamespaceContext.prototype.constructor = NamespaceContext;

NamespaceContext.prototype.LOWER_WORD = function() {
    return this.getToken(SHRParser.LOWER_WORD, 0);
};

NamespaceContext.prototype.DOT_SEPARATED_LW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_LW, 0);
};

NamespaceContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterNamespace(this);
	}
};

NamespaceContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitNamespace(this);
	}
};

NamespaceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitNamespace(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.NamespaceContext = NamespaceContext;

SHRParser.prototype.namespace = function() {

    var localctx = new NamespaceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, SHRParser.RULE_namespace);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 270;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.LOWER_WORD || _la===SHRParser.DOT_SEPARATED_LW)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_simpleName;
    return this;
}

SimpleNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleNameContext.prototype.constructor = SimpleNameContext;

SimpleNameContext.prototype.UPPER_WORD = function() {
    return this.getToken(SHRParser.UPPER_WORD, 0);
};

SimpleNameContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

SimpleNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSimpleName(this);
	}
};

SimpleNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSimpleName(this);
	}
};

SimpleNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSimpleName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SimpleNameContext = SimpleNameContext;

SHRParser.prototype.simpleName = function() {

    var localctx = new SimpleNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, SHRParser.RULE_simpleName);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 272;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.ALL_CAPS || _la===SHRParser.UPPER_WORD)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FullyQualifiedNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_fullyQualifiedName;
    return this;
}

FullyQualifiedNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedNameContext.prototype.constructor = FullyQualifiedNameContext;

FullyQualifiedNameContext.prototype.DOT_SEPARATED_UW = function() {
    return this.getToken(SHRParser.DOT_SEPARATED_UW, 0);
};

FullyQualifiedNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFullyQualifiedName(this);
	}
};

FullyQualifiedNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFullyQualifiedName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FullyQualifiedNameContext = FullyQualifiedNameContext;

SHRParser.prototype.fullyQualifiedName = function() {

    var localctx = new FullyQualifiedNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, SHRParser.RULE_fullyQualifiedName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 274;
        this.match(SHRParser.DOT_SEPARATED_UW);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SimpleOrFQNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_simpleOrFQName;
    return this;
}

SimpleOrFQNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SimpleOrFQNameContext.prototype.constructor = SimpleOrFQNameContext;

SimpleOrFQNameContext.prototype.simpleName = function() {
    return this.getTypedRuleContext(SimpleNameContext,0);
};

SimpleOrFQNameContext.prototype.fullyQualifiedName = function() {
    return this.getTypedRuleContext(FullyQualifiedNameContext,0);
};

SimpleOrFQNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitSimpleOrFQName(this);
	}
};

SimpleOrFQNameContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitSimpleOrFQName(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.SimpleOrFQNameContext = SimpleOrFQNameContext;

SHRParser.prototype.simpleOrFQName = function() {

    var localctx = new SimpleOrFQNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, SHRParser.RULE_simpleOrFQName);
    try {
        this.state = 278;
        switch(this._input.LA(1)) {
        case SHRParser.ALL_CAPS:
        case SHRParser.UPPER_WORD:
            this.enterOuterAlt(localctx, 1);
            this.state = 276;
            this.simpleName();
            break;
        case SHRParser.DOT_SEPARATED_UW:
            this.enterOuterAlt(localctx, 2);
            this.state = 277;
            this.fullyQualifiedName();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RefContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_ref;
    return this;
}

RefContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RefContext.prototype.constructor = RefContext;

RefContext.prototype.KW_REF = function() {
    return this.getToken(SHRParser.KW_REF, 0);
};

RefContext.prototype.OPEN_PAREN = function() {
    return this.getToken(SHRParser.OPEN_PAREN, 0);
};

RefContext.prototype.simpleOrFQName = function() {
    return this.getTypedRuleContext(SimpleOrFQNameContext,0);
};

RefContext.prototype.CLOSE_PAREN = function() {
    return this.getToken(SHRParser.CLOSE_PAREN, 0);
};

RefContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterRef(this);
	}
};

RefContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitRef(this);
	}
};

RefContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitRef(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.RefContext = RefContext;

SHRParser.prototype.ref = function() {

    var localctx = new RefContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, SHRParser.RULE_ref);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 280;
        this.match(SHRParser.KW_REF);
        this.state = 281;
        this.match(SHRParser.OPEN_PAREN);
        this.state = 282;
        this.simpleOrFQName();
        this.state = 283;
        this.match(SHRParser.CLOSE_PAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(SHRParser.CODE, 0);
};

CodeContext.prototype.EXTRA_INFO = function() {
    return this.getToken(SHRParser.EXTRA_INFO, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeContext = CodeContext;

SHRParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, SHRParser.RULE_code);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 285;
        this.match(SHRParser.CODE);
        this.state = 287;
        _la = this._input.LA(1);
        if(_la===SHRParser.EXTRA_INFO) {
            this.state = 286;
            this.match(SHRParser.EXTRA_INFO);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FullyQualifiedCodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_fullyQualifiedCode;
    return this;
}

FullyQualifiedCodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FullyQualifiedCodeContext.prototype.constructor = FullyQualifiedCodeContext;

FullyQualifiedCodeContext.prototype.ALL_CAPS = function() {
    return this.getToken(SHRParser.ALL_CAPS, 0);
};

FullyQualifiedCodeContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

FullyQualifiedCodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitFullyQualifiedCode(this);
	}
};

FullyQualifiedCodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitFullyQualifiedCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.FullyQualifiedCodeContext = FullyQualifiedCodeContext;

SHRParser.prototype.fullyQualifiedCode = function() {

    var localctx = new FullyQualifiedCodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, SHRParser.RULE_fullyQualifiedCode);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 289;
        this.match(SHRParser.ALL_CAPS);
        this.state = 290;
        this.code();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeConstraintContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_codeConstraint;
    return this;
}

CodeConstraintContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeConstraintContext.prototype.constructor = CodeConstraintContext;

CodeConstraintContext.prototype.codeFromValueset = function() {
    return this.getTypedRuleContext(CodeFromValuesetContext,0);
};

CodeConstraintContext.prototype.codeDescendent = function() {
    return this.getTypedRuleContext(CodeDescendentContext,0);
};

CodeConstraintContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeConstraint(this);
	}
};

CodeConstraintContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeConstraint(this);
	}
};

CodeConstraintContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeConstraint(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeConstraintContext = CodeConstraintContext;

SHRParser.prototype.codeConstraint = function() {

    var localctx = new CodeConstraintContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, SHRParser.RULE_codeConstraint);
    try {
        this.state = 294;
        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            this.codeFromValueset();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 293;
            this.codeDescendent();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeFromValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_codeFromValueset;
    return this;
}

CodeFromValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeFromValuesetContext.prototype.constructor = CodeFromValuesetContext;

CodeFromValuesetContext.prototype.KW_CODE = function() {
    return this.getToken(SHRParser.KW_CODE, 0);
};

CodeFromValuesetContext.prototype.KW_FROM = function() {
    return this.getToken(SHRParser.KW_FROM, 0);
};

CodeFromValuesetContext.prototype.valueset = function() {
    return this.getTypedRuleContext(ValuesetContext,0);
};

CodeFromValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeFromValueset(this);
	}
};

CodeFromValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeFromValueset(this);
	}
};

CodeFromValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeFromValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeFromValuesetContext = CodeFromValuesetContext;

SHRParser.prototype.codeFromValueset = function() {

    var localctx = new CodeFromValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, SHRParser.RULE_codeFromValueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 296;
        this.match(SHRParser.KW_CODE);
        this.state = 297;
        this.match(SHRParser.KW_FROM);
        this.state = 298;
        this.valueset();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CodeDescendentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_codeDescendent;
    return this;
}

CodeDescendentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeDescendentContext.prototype.constructor = CodeDescendentContext;

CodeDescendentContext.prototype.KW_CODE = function() {
    return this.getToken(SHRParser.KW_CODE, 0);
};

CodeDescendentContext.prototype.KW_DESCENDING_FROM = function() {
    return this.getToken(SHRParser.KW_DESCENDING_FROM, 0);
};

CodeDescendentContext.prototype.fullyQualifiedCode = function() {
    return this.getTypedRuleContext(FullyQualifiedCodeContext,0);
};

CodeDescendentContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCodeDescendent(this);
	}
};

CodeDescendentContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCodeDescendent(this);
	}
};

CodeDescendentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCodeDescendent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CodeDescendentContext = CodeDescendentContext;

SHRParser.prototype.codeDescendent = function() {

    var localctx = new CodeDescendentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, SHRParser.RULE_codeDescendent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 300;
        this.match(SHRParser.KW_CODE);
        this.state = 301;
        this.match(SHRParser.KW_DESCENDING_FROM);
        this.state = 302;
        this.fullyQualifiedCode();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_valueset;
    return this;
}

ValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValuesetContext.prototype.constructor = ValuesetContext;

ValuesetContext.prototype.URL = function() {
    return this.getToken(SHRParser.URL, 0);
};

ValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterValueset(this);
	}
};

ValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitValueset(this);
	}
};

ValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.ValuesetContext = ValuesetContext;

SHRParser.prototype.valueset = function() {

    var localctx = new ValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, SHRParser.RULE_valueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 304;
        this.match(SHRParser.URL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_primitive;
    return this;
}

PrimitiveContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveContext.prototype.constructor = PrimitiveContext;

PrimitiveContext.prototype.KW_BOOLEAN = function() {
    return this.getToken(SHRParser.KW_BOOLEAN, 0);
};

PrimitiveContext.prototype.KW_INTEGER = function() {
    return this.getToken(SHRParser.KW_INTEGER, 0);
};

PrimitiveContext.prototype.KW_STRING = function() {
    return this.getToken(SHRParser.KW_STRING, 0);
};

PrimitiveContext.prototype.KW_DECIMAL = function() {
    return this.getToken(SHRParser.KW_DECIMAL, 0);
};

PrimitiveContext.prototype.KW_URI = function() {
    return this.getToken(SHRParser.KW_URI, 0);
};

PrimitiveContext.prototype.KW_BASE64_BINARY = function() {
    return this.getToken(SHRParser.KW_BASE64_BINARY, 0);
};

PrimitiveContext.prototype.KW_INSTANT = function() {
    return this.getToken(SHRParser.KW_INSTANT, 0);
};

PrimitiveContext.prototype.KW_DATE = function() {
    return this.getToken(SHRParser.KW_DATE, 0);
};

PrimitiveContext.prototype.KW_DATE_TIME = function() {
    return this.getToken(SHRParser.KW_DATE_TIME, 0);
};

PrimitiveContext.prototype.KW_TIME = function() {
    return this.getToken(SHRParser.KW_TIME, 0);
};

PrimitiveContext.prototype.KW_CODE = function() {
    return this.getToken(SHRParser.KW_CODE, 0);
};

PrimitiveContext.prototype.KW_OID = function() {
    return this.getToken(SHRParser.KW_OID, 0);
};

PrimitiveContext.prototype.KW_ID = function() {
    return this.getToken(SHRParser.KW_ID, 0);
};

PrimitiveContext.prototype.KW_MARKDOWN = function() {
    return this.getToken(SHRParser.KW_MARKDOWN, 0);
};

PrimitiveContext.prototype.KW_UNSIGNED_INT = function() {
    return this.getToken(SHRParser.KW_UNSIGNED_INT, 0);
};

PrimitiveContext.prototype.KW_POSITIVE_INT = function() {
    return this.getToken(SHRParser.KW_POSITIVE_INT, 0);
};

PrimitiveContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterPrimitive(this);
	}
};

PrimitiveContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitPrimitive(this);
	}
};

PrimitiveContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitPrimitive(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.PrimitiveContext = PrimitiveContext;

SHRParser.prototype.primitive = function() {

    var localctx = new PrimitiveContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, SHRParser.RULE_primitive);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 306;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << SHRParser.KW_BOOLEAN) | (1 << SHRParser.KW_INTEGER) | (1 << SHRParser.KW_STRING) | (1 << SHRParser.KW_DECIMAL) | (1 << SHRParser.KW_URI) | (1 << SHRParser.KW_BASE64_BINARY) | (1 << SHRParser.KW_INSTANT) | (1 << SHRParser.KW_DATE) | (1 << SHRParser.KW_DATE_TIME) | (1 << SHRParser.KW_TIME) | (1 << SHRParser.KW_CODE) | (1 << SHRParser.KW_OID) | (1 << SHRParser.KW_ID) | (1 << SHRParser.KW_MARKDOWN) | (1 << SHRParser.KW_UNSIGNED_INT) | (1 << SHRParser.KW_POSITIVE_INT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CountContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SHRParser.RULE_count;
    return this;
}

CountContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CountContext.prototype.constructor = CountContext;

CountContext.prototype.WHOLE_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SHRParser.WHOLE_NUMBER);
    } else {
        return this.getToken(SHRParser.WHOLE_NUMBER, i);
    }
};


CountContext.prototype.RANGE = function() {
    return this.getToken(SHRParser.RANGE, 0);
};

CountContext.prototype.STAR = function() {
    return this.getToken(SHRParser.STAR, 0);
};

CountContext.prototype.enterRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.enterCount(this);
	}
};

CountContext.prototype.exitRule = function(listener) {
    if(listener instanceof SHRParserListener ) {
        listener.exitCount(this);
	}
};

CountContext.prototype.accept = function(visitor) {
    if ( visitor instanceof SHRParserVisitor ) {
        return visitor.visitCount(this);
    } else {
        return visitor.visitChildren(this);
    }
};




SHRParser.CountContext = CountContext;

SHRParser.prototype.count = function() {

    var localctx = new CountContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, SHRParser.RULE_count);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 308;
        this.match(SHRParser.WHOLE_NUMBER);
        this.state = 309;
        this.match(SHRParser.RANGE);
        this.state = 310;
        _la = this._input.LA(1);
        if(!(_la===SHRParser.STAR || _la===SHRParser.WHOLE_NUMBER)) {
        this._errHandler.recoverInline(this);
        }
        else {
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SHRParser = SHRParser;
