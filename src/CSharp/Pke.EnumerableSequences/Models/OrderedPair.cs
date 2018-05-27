namespace Pke.EnumerableSequences.Models
{
    /// <summary>
    /// An ordered pair with an x and y coordinate
    /// </summary>
    public class OrderedPair
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="T:Pke.InfiniteSequences.OrderedPair"/> class.
        /// </summary>
        /// <param name="x">The x coordinate.</param>
        /// <param name="y">The y coordinate.</param>
        public OrderedPair(long x, long y)
        {
            X = x;
            Y = y;
        }

        public long X { get; set; }

        public long Y { get; set; }

        public override string ToString()
        {
            return $"({X}, {Y})";
        }
    }
}