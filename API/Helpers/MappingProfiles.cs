using AutoMapper;
using API.Dto;
using Entity;

namespace API.Helpers
{
    public class MappingProfiles : Profile
    {
        public MappingProfiles()
        {
             CreateMap<Course, CourseDto>()
            .ForMember(c => c.Category, o => o.MapFrom(s => s.Category.Name));

            CreateMap<Learning, LearningDto>();

            CreateMap<Requirement, RequirementDto>();

            CreateMap<Category, CategoryDto>();

            CreateMap<Category, CategoriesDto>();

        }
    }
}