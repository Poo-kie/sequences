using System.Linq;
using Pke.EnumerableSequences.Models;
using Xunit;

namespace Pke.EnumerableSequences.Tests
{
    public class CantorsZigZagTests
    {
        readonly OrderedPair[] _firstTen =
        {
            new OrderedPair(1, 1),
            new OrderedPair(1, 2),
            new OrderedPair(2, 1),
            new OrderedPair(1, 3),
            new OrderedPair(2, 2),
            new OrderedPair(3, 1),
            new OrderedPair(1, 4),
            new OrderedPair(2, 3),
            new OrderedPair(3, 2),
            new OrderedPair(4, 1)
        };

        [Fact]
        public void FirstTenValuesShouldBeCantorsZigZag()
        {
            var sequence = new CantorsZigZag();

            var firstTen = sequence.Take(10).ToList();

            for (var i = 0; i < 10; i++)
            {
                Assert.Equal(_firstTen.ElementAt(i).X, firstTen.ElementAt(i).X);
                Assert.Equal(_firstTen.ElementAt(i).Y, firstTen.ElementAt(i).Y);
            }
        }

        [Fact]
        public void SupplyingMaxResultsShouldYieldExpectedCount()
        {
            var sequence = new CantorsZigZag(maxResults: 16);

            Assert.Equal(16, sequence.Count());
        }
    }
}
