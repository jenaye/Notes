<?php
/**
 * Created by PhpStorm.
 * User: Houziaux mike : jenaye
 * Email : mike@les-tilleuls.coop
 * Date: 24/03/18
 * Time: 14:21
 */
namespace Jenaye\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Note
 * @ApiResource(attributes={"normalization_context"={"groups"={"Note"}},"filters"={"date_filter"}})
 * @ORM\Table(name="note")
 * @ORM\Entity(repositoryClass="Jenaye\Repository\NoteRepository")
 */
class Note
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"Note"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"Note"})
     */
    public $created_at;

    /**
     * @ORM\Column(type="text")
     * @Groups({"Note"})
     */
    public $content;

    /**
     * @ORM\ManyToMany(targetEntity="Tag", inversedBy="notes")
     * @Groups({"Note"})
     */
    private $tags;

    public function __construct()
    {
        $this->tags = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add tag
     *
     * @param \Jenaye\Entity\Tag $tag
     *
     * @return Note
     */
    public function addTag(\Jenaye\Entity\Tag $tag)
    {
        $this->tags[] = $tag;
        return $this;
    }

    /**
     * Remove Tag
     * @param \Jenaye\Entity\Tag $tags
     */
    public function removeTag(\Jenaye\Entity\Tag $tag)
    {
        $this->tags->removeElement($tag);
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }
}