using FluentValidation;
using fighter.Models;

namespace zumo.Validators
{
    public class FighterValidator : AbstractValidator<Fighter>
    {
        public FighterValidator()
        {
            RuleFor(fighter => fighter.name)
               .NotEmpty().WithMessage("El nombre es requerido")
               .Length(2, 100).WithMessage("El nombre debe tener entre 2 y 100 caracteres");

            RuleFor(fighter => fighter.address)
                .NotEmpty().WithMessage("La dirección es requerida")
                .Length(10, 200).WithMessage("La dirección debe tener entre 10 y 200 caracteres");

            RuleFor(fighter => fighter.fightsWon)
                .GreaterThanOrEqualTo(0).WithMessage("La cantidad de peleas ganadas no puede ser negativa");

            RuleFor(fighter => fighter.age)
                .InclusiveBetween(18, 60).WithMessage("La edad debe estar entre 18 y 60 años");

            RuleFor(fighter => fighter.nationality)
                .NotEmpty().WithMessage("La nacionalidad es requerida")
                .Length(2, 56).WithMessage("La nacionalidad debe tener entre 2 y 56 caracteres");

            RuleFor(fighter => fighter.kilograms)
                .GreaterThan(0).WithMessage("El peso en kilogramos debe ser mayor que cero");
        }
    }
}
