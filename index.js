const Immutable = require('immutable');

const options = Immutable.fromJS([{
  val: 'foo',
  key: 'foo'
}, {
  val: 'bar',
  key: 'bar'
},
{
  val: 'bam',
  key: 'bam'
},
{
  val: 'barf',
  key: 'barf'
},
{
  val: 'blart',
  key: 'blart'
}]);

const {
  isFullMatch,
  suggestedIndex,
  suggestedOption,
} = getSuggestedValue(options, 'bam');
console.log();
console.log('isFullMatch', isFullMatch);
console.log('suggestedIndex', suggestedIndex);
console.log('suggestedOption', suggestedOption);
console.log();
export function getSuggestedValue(options, partialValue) {
  let isFullMatch = false;
  let suggestedIndex = -1;
  let suggestedOption = null;

  options.some((option, i, optionsList) => {
    console.log('iterating');
    if (!suggestedOption &&
      option.get('val').toLowerCase().includes(partialValue.toLowerCase())
    ) {
      suggestedIndex = i;
      suggestedOption = option;
    }
    isFullMatch = isFullMatch ||
      option.get('val').toLowerCase() === partialValue.toLowerCase();
    return isFullMatch;
  });

  return {
    isFullMatch,
    suggestedIndex,
    suggestedOption,
  };
}
