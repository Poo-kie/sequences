using System.Collections;
using System.Collections.Generic;
using Pke.EnumerableSequences.Models;

namespace Pke.EnumerableSequences
{
    /// <summary>
    /// Enumerates all ordered pairs of the form (x, y)
    /// given the following rules
    /// 1)  the sum x + y is represented in increasing order in each pair
    /// 2)  for pairs with the same sum, smaller values of x appear first
    /// </summary>
    public class CantorsZigZag : IEnumerable<OrderedPair>
    {
        readonly long? _maxResults;

        long _count;

        /// <summary>
        /// Initializes a new instance of the <see cref="T:Pke.InfiniteSequences.CantorsZigZag"/> class.
        /// </summary>
        /// <param name="maxResults">max results to enumerate</param>
        public CantorsZigZag(long? maxResults = null)
        {
            _maxResults = maxResults;
        }

        public IEnumerator<OrderedPair> GetEnumerator()
        {
            for (var x = 1L; !_maxResults.HasValue || x <= _maxResults.Value; x++)
            {
                foreach (var pair in GetDecodedGroup(x))
                {
                    if (_maxResults.HasValue && _maxResults.Value == _count) break;

                    _count++;

                    yield return pair;
                }
            }
        }

        IEnumerable<OrderedPair> GetDecodedGroup(long sum)
        {
            var x = 1L;

            for (long y = sum; y > 0L; y--)
            {
                yield return new OrderedPair(x++, y);
            }
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

}