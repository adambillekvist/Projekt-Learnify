using System.Collections.Generic;
using System.Threading.Tasks;

namespace Entity.interfaces
{
    public interface ICategoryRepository
    {
         Task<IReadOnlyList<Category>> GetCategoriesAsync();

         Task<Category> GetCategoriesByIdAsync(int id);
    }
}