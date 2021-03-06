defmodule Sonora.Song do
  use Sonora.Web, :model

  schema "songs" do
    field :title, :string
    field :plays, :integer
    field :url, :string
    belongs_to :artist, Sonora.Artist
    belongs_to :genre, Sonora.Genre

    timestamps
  end

  @required_fields ~w(title url artist_id genre_id)
  @optional_fields ~w(plays)

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
